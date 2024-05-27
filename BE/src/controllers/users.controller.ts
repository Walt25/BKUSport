import { ObjectId } from 'mongodb'
import { USERS_MESSAGE } from '~/constants/messages'
import User from '~/models/schemas/User.schema'
import { NextFunction, Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import usersService from '~/services/users.services'
import { RegisterReqBody } from '~/models/requests/User.requests'
import databaseService from '~/services/database.services'
import rentalService from '~/services/rental.services'
import { RentalStatus, TokenType } from '~/constants/enum'
import { signToken } from '~/utils/jwt'
import RefreshToken from '~/models/schemas/RefreshToken.schema'
import { hashPassword } from '~/utils/crypto'
const bcrypt = require('bcrypt')

export const loginController = async (req: Request<ParamsDictionary, any, any>, res: Response) => {
  const user = req.user as User
  const user_id = user._id as ObjectId
  const result = await usersService.login({ user_id: user_id.toString(), role: user.role })

  if (result) {
    return res.json({ message: USERS_MESSAGE.LOGIN_SUCCESSFUL, result })
  } else res.json({ message: 'error' })
}

export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response,
  next: NextFunction
) => {
  const result = await usersService.register(req.body)
  if (!result.error) {
    return res.status(200).json({
      message: USERS_MESSAGE.REGISTER_SUCCESSFULY,
      result
    })
  }

  return res.json({ message: result.error, status: "ERROR" })
}

export const rentNewFieldController = async (req: Request, res: Response, next: NextFunction) => {
  const rental_id = new ObjectId(req.params.rental_id)
  const result = await rentalService.updateStatus(rental_id, RentalStatus.Rented)
  return res.status(200).json({
    message: 'Rent new field successfully',
    result
  })
}

export const getCurrentUserProfile = async (req: Request<ParamsDictionary, any, any>, res: Response) => {
  const user = await databaseService.users.findOne({ _id: req.user?._id })

  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.role
    })
  } else {
    res.status(404)
    throw new Error('user not found')
  }
  return res.json({ data: user })
}

export const verifyOTP = async (req: Request, res: Response) => {
  let { userId, otp } = req.body

  try {
    if (!userId || !otp) {
      throw Error('Empty otp are not allowed')
    } else {
      const otpDetail = await databaseService.otpVerification.find({ userId }).toArray()
      if (otpDetail.length < 1) {
        throw new Error("Account record doesn't exist or has been verified already, please sign up or login")
      } else {
        const { exprireAt } = otpDetail[0]
        const hashedOTP = otpDetail[0].otp
        if (exprireAt < Date.now()) {
          await databaseService.otpVerification.deleteMany({ userId })
          throw new Error('Code has exprired. Please request again')
        } else {
          const validOTP = await bcrypt.compare(otp, hashedOTP)
          if (!validOTP) {
            throw new Error('Invalid code passed, please check your email')
          } else {
            await databaseService.users.updateOne({ _id: new ObjectId(userId) }, [
              {
                $set: { verified: true }
              }
            ])
            await databaseService.otpVerification.deleteMany({ userId })

            const access_token = await signToken({
              payload: { userId, role: 'user', token_type: TokenType.AccessToken },
              options: { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
            })

            const refresh_token = await signToken({
              payload: { userId, role: 'user', token_type: TokenType.RefeshToken },
              options: { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN }
            })

            const email_verify_token = await signToken({
              payload: { userId, role: 'user', token_type: TokenType.EmailVerifyToken },
              options: { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN }
            })

            await databaseService.users.updateOne({ _id: new ObjectId(userId) }, [
              {
                $set: { email_verify_token: email_verify_token }
              }
            ])
            await databaseService.refreshTokens.insertOne(
              new RefreshToken({ user_id: new ObjectId(userId), token: refresh_token })
            )

            res.json({
              access_token,
              refresh_token,
              status: 'VERIFIED',
              message: 'User email verified successfully'
            })
          }
        }
      }
    }
  } catch (error: any) {
    res.json({
      status: 'FALSE',
      message: error.message
    })
  }
}

export const verifyOTPFogotPass = async (req: Request, res: Response) => {
  let { userId, otp, password } = req.body

  try {
    if (!userId || !otp) {
      throw Error('Empty otp are not allowed')
    } else {
      const otpDetail = await databaseService.otpVerification.find({ userId }).toArray()
      if (otpDetail.length < 1) {
        throw new Error("Account record doesn't exist or has been verified already, please sign up or login")
      } else {
        const { exprireAt } = otpDetail[0]
        const hashedOTP = otpDetail[0].otp
        if (exprireAt < Date.now()) {
          await databaseService.otpVerification.deleteMany({ userId })
          throw new Error('Code has exprired. Please request again')
        } else {
          const validOTP = await bcrypt.compare(otp, hashedOTP)
          if (!validOTP) {
            throw new Error('Invalid code passed, please check your email')
          } else {
            await databaseService.users.updateOne({ _id: new ObjectId(userId) }, [
              {
                $set: { password: hashPassword(password)}
              }
            ])
            await databaseService.otpVerification.deleteMany({ userId })
            res.json({
              status: 'VERIFIED',
              message: 'User email verified successfully'
            })
          }
        }
      }
    }
  } catch (error: any) {
    res.json({
      status: 'FALSE',
      message: error.message
    })
  }
}

export const forgotPasswordController = async (req: Request, res: Response) => {
  const result = await usersService.forgotPassword(req.body)
  return res.json({
    status: result.status,
    message: result.message,
    user_id: result.user_id
  })
}

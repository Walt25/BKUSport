import { TokenType, UserVerifyStatus } from '~/constants/enum'
import databaseService from './database.services'
import { ObjectId } from 'mongodb'
import { signToken } from '~/utils/jwt'
import RefreshToken from '~/models/schemas/RefreshToken.schema'
import { ForgotPasswordReqBody, RegisterReqBody } from '~/models/requests/User.requests'
import { sendOTPForgotPassword, sendOTPVerificationEmail, sendVerifyRegisterEmail } from '~/utils/email'
import { hashPassword } from '~/utils/crypto'
import User from '~/models/schemas/User.schema'
import { error } from 'console'
import { check } from 'express-validator'
import { ErrorWithStatus } from '~/models/Errors'

class UsersService {
  private signAccessToken({ user_id, role }: { user_id: string; role: string }) {
    return signToken({
      payload: { user_id, role, token_type: TokenType.AccessToken },
      options: { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
    })
  }
  private signRefreshToken({ user_id, role }: { user_id: string; role: string }) {
    return signToken({
      payload: { user_id, role, token_type: TokenType.RefeshToken },
      options: { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN }
    })
  }

  private signAccessAndRefreshToken({ user_id, role }: { user_id: string; role: string }) {
    return Promise.all([this.signAccessToken({ user_id, role }), this.signRefreshToken({ user_id, role })])
  }

  private signEmailVerifyToken({ user_id, role }: { user_id: string; role: string }) {
    return signToken({
      payload: { user_id, role, token_type: TokenType.EmailVerifyToken },
      options: { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN }
    })
  }

  async login({ user_id, role }: { user_id: string; role: string }) {
    const access_token = await signToken({
      payload: { userId: user_id, role: 'user', token_type: TokenType.AccessToken },
      options: { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
    })

    const refresh_token = await signToken({
      payload: { userId: user_id, role: 'user', token_type: TokenType.RefeshToken },
      options: { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN }
    })
    await databaseService.refreshTokens.insertOne(
      new RefreshToken({ user_id: new ObjectId(user_id), token: refresh_token })
    )
    return {
      access_token,
      refresh_token,
      user_id,
      role
    }
  }

  async checkEmailExist(email: string) {
    const user = await databaseService.users.findOne({ email })
    return Boolean(user)
  }
  async register(payload: RegisterReqBody) {
    const emailExist = await this.checkEmailExist(payload.email)

    if (emailExist) {
      return { error: 'This email are in used' }
    }

    if (payload.confirm_password !== payload.password) {
      return { error: 'Confirm password must be the same as password' }
    }

    const result = await databaseService.users.insertOne(
      new User({
        ...payload,
        role: 'user',
        verified: false,
        password: hashPassword(payload.password)
      })
    )

    const user_id = result.insertedId.toString()
    const respone = await sendOTPVerificationEmail(payload.email, user_id)

    return {
      user_id,
      role: 'user',
      respone
    }
  }

  async forgotPassword(payload: ForgotPasswordReqBody) {
    const user = await databaseService.users.findOne({ email: payload.email })
    if (!user) {
      throw new ErrorWithStatus({ message: 'Email not exist', status: 550 })
    }

    const user_id = user._id.toString()
    const respone = await sendOTPForgotPassword(payload.email, user_id)
    return {
      user_id,
      role: 'user',
      respone
    }
  }
}

const usersService = new UsersService()
export default usersService

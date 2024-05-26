import { USERS_MESSAGE } from '~/constants/messages'
import { validate } from '~/utils/validation'
import { ParamSchema, check, checkSchema } from 'express-validator'
import databaseService from '~/services/database.services'
import { hashPassword } from '~/utils/crypto'
import usersService from '~/services/users.services'
import { verifyToken } from '~/utils/jwt'
import { ObjectId } from 'mongodb'

export const loginValidator = validate(
  checkSchema(
    {
      email: {
        isEmail: { errorMessage: USERS_MESSAGE.EMAIL_IS_INVALID },
        notEmpty: { errorMessage: USERS_MESSAGE.EMAIL_IS_REQUIRED },
        custom: {
          options: async (value, { req }) => {
            const user = await databaseService.users.findOne({
              email: value,
              password: hashPassword(req.body.password)
            })
            if (user === null) {
              throw new Error(USERS_MESSAGE.EMAIL_OR_PASSWORD_IS_INCORRECT)
            }
            req.user = user
            return true
          }
        }
      },
      password: {
        isString: { errorMessage: USERS_MESSAGE.PASSWORD_MUST_BE_STRING },
        notEmpty: { errorMessage: USERS_MESSAGE.PASSWORD_IS_REQUIRED },
        isLength: {
          options: {
            min: 6,
            max: 50
          },
          errorMessage: USERS_MESSAGE.PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50
        },
      }
    },
    ['body']
  )
)

export const registerValidator = validate(
  checkSchema(
    {
      username: {
        isString: {
          errorMessage: USERS_MESSAGE.NAME_MUST_BE_STRING
        },
        isLength: {
          options: {
            min: 5,
            max: 100
          },
          errorMessage: USERS_MESSAGE.NAME_LENGTH_MUST_BE_FROM_1_TO_100
        },
        notEmpty: { errorMessage: USERS_MESSAGE.NAME_IS_REQUIRED },
        trim: true
      },
      email: {
        isEmail: { errorMessage: USERS_MESSAGE.EMAIL_IS_INVALID },
        notEmpty: { errorMessage: USERS_MESSAGE.EMAIL_IS_REQUIRED },
        custom: {
          options: async (value, { req }) => {
            const isExistEmail = await usersService.checkEmailExist(value)
            if (isExistEmail) {
              throw new Error(USERS_MESSAGE.EMAIL_ALREADY_EXISTS)
            }
            return isExistEmail
          }
        }
      },
      password: {
        // isString: { errorMessage: USERS_MESSAGE.PASSWORD_MUST_BE_STRING },
        notEmpty: { errorMessage: USERS_MESSAGE.PASSWORD_IS_REQUIRED }
      },
      confirmPassword: {
        // isString: { errorMessage: USERS_MESSAGE.CONFIRM_PASSWORD_MUST_BE_STRING },
        notEmpty: { errorMessage: USERS_MESSAGE.CONFIRM_PASSWORD_IS_REQUIRED },
        // isLength: {
        //   options: {
        //     min: 6,
        //     max: 50
        //   },
        //   errorMessage: USERS_MESSAGE.CONFIRM_PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50
        // },
        custom: {
          options: (value, { req }) => {
            if (value !== req.body.password) {
              throw new Error(USERS_MESSAGE.CONFIRM_MUST_BE_THE_SAME_AS_PASSWORD)
            } else {
              return true
            }
          }
        }
      }
    },
    ['body']
  )
)


export const authenticate = async (req: any, res: any, next: any) => {
  let token;

  token = req.headers.authorization

  console.log(token)

  if (token) {

    const decoded = verifyToken(token)
    console.log("hello", decoded)
      try {    
          req.user = await databaseService.users.findOne({_id: new ObjectId(decoded.userId)})
          next()
      } catch (err) {
          res.status(401)
          throw new Error("authenticate false, token false")
      }
  }
  else {
      res.status(401)
      throw new Error("authenticate false, no token")
  }
}

export const authorizeAdmin = (req: any, res: any, next: any) => {
  if (req.user && req.user.role === "admin") {
      next()
  }
  else {
      res.status(401).json({message: 'you have no permission'})
  }
} 

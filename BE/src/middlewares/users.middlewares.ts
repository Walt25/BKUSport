import { USERS_MESSAGE } from '~/constants/messages'
import { validate } from '~/utils/validation'
import { ParamSchema, check, checkSchema } from 'express-validator'
import databaseService from '~/services/database.services'
import { hashPassword } from '~/utils/crypto'
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
        isStrongPassword: {
          options: {
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
          },
          errorMessage: USERS_MESSAGE.PASSWORD_MUST_BE_STRONG
        }
      }
    },
    ['body']
  )
)

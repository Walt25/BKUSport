import { ObjectId } from 'mongodb'
import { USERS_MESSAGE } from '~/constants/messages'
import User from '~/models/schemas/User.schema'
import { NextFunction, Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import usersService from '~/services/users.services'

export const loginController = async (req: Request<ParamsDictionary, any, any>, res: Response) => {
  const user = req.user as User
  const user_id = user._id as ObjectId
  const result = await usersService.login({ user_id: user_id.toString(), verify: user.verify })
  return res.json({ message: USERS_MESSAGE.LOGIN_SUCCESSFUL, result })
}

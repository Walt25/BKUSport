import { ObjectId } from 'mongodb'
import { USERS_MESSAGE } from '~/constants/messages'
import User from '~/models/schemas/User.schema'
import { NextFunction, Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import usersService from '~/services/users.services'
import { RegisterReqBody } from '~/models/requests/User.requests'
import databaseService from '~/services/database.services'
import rentalService from '~/services/rental.services'
import { RentalStatus } from '~/constants/enum'

export const loginController = async (req: Request<ParamsDictionary, any, any>, res: Response) => {
  const user = req.user as User
  const user_id = user._id as ObjectId
  const result = await usersService.login({ user_id: user_id.toString(), role: user.role })
  return res.json({ message: USERS_MESSAGE.LOGIN_SUCCESSFUL, result })
}

export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response,
  next: NextFunction
) => {
  const result = await usersService.register(req.body)
  return res.status(200).json({
    message: USERS_MESSAGE.REGISTER_SUCCESSFULY,
    result
  })
}

export const rentNewFieldController = async (req: Request, res: Response, next: NextFunction) => {
  const rental_id = new ObjectId(req.params.rental_id)
  const result = await rentalService.updateStatus(rental_id, RentalStatus.Rented)
  return res.status(200).json({
    message: 'Rent new field successfully',
    result
  })
}

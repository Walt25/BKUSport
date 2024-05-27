import { NextFunction, Request, Response } from 'express'
import { ObjectId } from 'mongodb'
import databaseService from '~/services/database.services'
import fieldService from '~/services/field.services'

export const getAllFieldController = async (req: Request, res: Response) => {
  const result = await databaseService.fields.find().toArray()
  return res.json({
    message: 'get all field successfully',
    result
  })
}

export const addFieldController = async (req: Request, res: Response) => {
  const result = await fieldService.addNewField(req.body)
  return res.json({
    message: 'add new field successfully',
    result
  })
}

export const getFieldByIdController = async (req: Request, res: Response) => {
  const field_id = req.params.field_id
  const result = await fieldService.getFieldById(field_id)
  return res.json({
    message: 'get a field successfully',
    result
  })
}

export const orderFieldController = async (req: Request, res: Response) => {
  const field_id = new ObjectId(req.params.field_id)
  const { start, time } = req.body
  const result = fieldService.rentField(req.user?._id, field_id, start, time)
  return res.json({
    message: 'rent a field successfully',
    result
  })
}

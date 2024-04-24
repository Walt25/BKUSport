import { NextFunction, Request, Response } from 'express'
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

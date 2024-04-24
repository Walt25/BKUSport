import { NextFunction, Request, Response } from 'express'
import { ObjectId } from 'mongodb'
import databaseService from '~/services/database.services'
import uniformService from '~/services/uniform.services'

export const getAllUniformController = async (req: Request, res: Response) => {
  const result = await databaseService.fields.find()
  return res.json({
    message: 'get all uniform successfully',
    result
  })
}

export const getUniform = async (req: Request, res: Response) => {
  const uniform_id = req.params.uniform_id
  const result = databaseService.uniforms.findOne({ _id: new ObjectId(uniform_id) })
}

export const addUniformController = async (req: Request, res: Response) => {
  const result = await uniformService.addNewUniform(req.body)
  return res.json({
    message: 'add new field successfully',
    result
  })
}

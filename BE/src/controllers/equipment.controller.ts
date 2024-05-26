import { NextFunction, Request, Response } from 'express'
import { ObjectId } from 'mongodb'
import databaseService from '~/services/database.services'
import equipmentService from '~/services/equipment.services'
const fs = require('fs');

export const getAllEquipmentController = async (req: Request, res: Response) => {
  const result = await databaseService.equipments.find().toArray()
  return res.json({
    message: 'get all equipment successfully',
    result
  })
}

export const getEquipmentByIdController = async (req: Request, res: Response) => {
  const equipment_id = req.params.equipment_id
  const result = await databaseService.equipments.findOne({ _id: new ObjectId(equipment_id) })
  return res.json({
    message: 'get a equipment successfully',
    result
  })
}

export const addEquipmentController = async (req: Request, res: Response) => {
  const result = await equipmentService.addNewEquipment(req.body)
  return res.json({
    message: 'add new equipment successfully',
    result
  })
}

export const uploadImages = async (req: any, res: any) => {
  const files = req.files;
  const path = 'http://localhost:4000/images/'
  var images: string[] = []
  files.map((i: any) => {
    images.push(path + i.filename)
  })
  res.status(200).json({ data: images });
}

export const updateProductById = async (req: any, res: any) => {
  const product_id = req.body.id
  const result = await equipmentService.updateEquipment(new ObjectId(product_id), req.body)
  return res.json({
    message: 'add new equipment successfully',
    result
  })
}

export const removeEquipmentById = async (req: Request, res: Response) => {
  const product_id = req.body.id
  const product = await databaseService.equipments.findOne({ _id: new ObjectId(product_id)})
  if (product) {
    const result = await databaseService.equipments.deleteOne({_id: new ObjectId(product_id)})
    return res.json({
      status: "SUCCESS",
      message: "Delete product successfull"
    })
  }
  return res.json({
    status: "FALSE",
    message: "Something wrong"
  })
}
import { NextFunction, Request, Response } from 'express'
import { ObjectId } from 'mongodb'
import databaseService from '~/services/database.services'
import foodService from '~/services/food.services'
import uniformService from '~/services/uniform.services'

export const getAllFoodController = async (req: Request, res: Response) => {
  const result = await databaseService.foods.find().toArray()
  return res.json({
    message: 'get all food successfully',
    result
  })
}

export const getFoodByIdController = async (req: Request, res: Response) => {
  const food_id = req.params.food_id
  const result = databaseService.foods.findOne({ _id: new ObjectId(food_id) })
  return res.json({
    message: 'get a food successfully',
    result
  })
}

export const addFoodController = async (req: Request, res: Response) => {
  const result = await foodService.addNewFood(req.body)
  return res.json({
    message: 'add new food successfully',
    result
  })
}

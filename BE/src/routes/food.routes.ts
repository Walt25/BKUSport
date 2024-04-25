import { Router } from 'express'
import { addFoodController, getAllFoodController, getFoodByIdController } from '~/controllers/food.controller'
import { wrapRequestHanlder } from '~/utils/handler'

const foodRouter = Router()

foodRouter.get('/', wrapRequestHanlder(getAllFoodController))

foodRouter.post('/', wrapRequestHanlder(addFoodController))

foodRouter.get('/:food_id', wrapRequestHanlder(getFoodByIdController))

export default foodRouter

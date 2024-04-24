import Food from '~/models/schemas/Food.schema'
import databaseService from './database.services'
import { ObjectId } from 'mongodb'

class FoodService {
  async addNewFood(body: any) {
    const result = await databaseService.foods.insertOne(
      new Food({
        images: body.images,
        name: body.name,
        stock: body.stock,
        price: body.price,
        description: body.description
      })
    )
    const food = await databaseService.foods.findOne({ _id: new ObjectId(result.insertedId) })
    return food
  }
}

const foodService = new FoodService()
export default foodService

import { ObjectId } from 'mongodb'

interface FoodType {
  _id?: ObjectId
  image: string
  name: string
  stock: number
  price: number
  description: string
}

export default class Food {
  _id?: ObjectId
  image: string
  name: string
  stock: number
  price: number
  description: string
  constructor(food: FoodType) {
    this._id = food._id
    this.image = food.image
    this.name = food.name
    this.stock = food.stock
    this.price = food.price
    this.description = food.description
  }
}

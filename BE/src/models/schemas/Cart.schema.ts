import { ObjectId } from 'mongodb'

interface UniformItem {
  uniform_id: ObjectId
  quantity: number
}
interface FoodItem {
  food_id: ObjectId
  quantity: number
}

interface CartType {
  _id?: ObjectId
  uniforms: UniformItem[]
  foods: FoodItem[]
  user_id: ObjectId
}

export default class Cart {
  _id?: ObjectId
  uniforms: UniformItem[]
  foods: FoodItem[]
  user_id: ObjectId
  constructor(cart: CartType) {
    this._id = cart._id
    this.uniforms = cart.uniforms
    this.foods = cart.foods
    this.user_id = cart.user_id
  }
}

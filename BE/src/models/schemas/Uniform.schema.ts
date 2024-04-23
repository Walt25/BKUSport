import { ObjectId } from 'mongodb'

interface UniformType {
  _id?: ObjectId
  image: string
  name: string
  stock: number
  color: string
  size: string
  price: number
  description: string
}

export default class Uniform {
  _id?: ObjectId
  image: string
  name: string
  stock: number
  color: string
  size: string
  price: number
  description: string
  constructor(uniform: UniformType) {
    this._id = uniform._id
    this.image = uniform.image
    this.name = uniform.name
    this.stock = uniform.stock
    this.color = uniform.color
    this.size = uniform.size
    this.price = uniform.price
    this.description = uniform.description
  }
}

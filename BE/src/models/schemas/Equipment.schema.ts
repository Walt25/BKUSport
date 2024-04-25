import { ObjectId } from 'mongodb'

interface Type {
  stock: number
  size: string
}

interface EquipmentType {
  _id?: ObjectId
  images: string[]
  name: string
  type: Type[]
  price: number
  description: string
}

export default class Equipment {
  _id?: ObjectId
  images: string[]
  name: string
  type: Type[]
  price: number
  description: string
  constructor(uniform: EquipmentType) {
    this._id = uniform._id
    this.images = uniform.images
    this.name = uniform.name
    this.type = uniform.type
    this.price = uniform.price
    this.description = uniform.description
  }
}

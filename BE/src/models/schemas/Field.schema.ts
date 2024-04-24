import { ObjectId } from 'mongodb'

interface FieldType {
  _id?: ObjectId
  name: string
  images: string[]
  location: string
  promotion_id?: ObjectId | undefined
}

export default class Field {
  _id?: ObjectId
  name: string
  images: string[]
  location: string
  promotion_id?: ObjectId
  constructor(field: FieldType) {
    this._id = field._id
    this.name = field.name
    this.images = field.images
    this.location = field.location
    this.promotion_id = field.promotion_id || undefined
  }
}

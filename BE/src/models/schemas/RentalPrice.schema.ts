import { ObjectId } from 'mongodb'

interface RentalPriceType {
  _id?: ObjectId
  price: number
  start: Date
  end: Date
  field_id: ObjectId
}

export default class RentalPrice {
  _id?: ObjectId
  price: number
  start: Date
  end: Date
  field_id: ObjectId
  constructor({ _id, price, start, end, field_id }: RentalPriceType) {
    this._id = _id
    this.price = price
    this.start = start
    this.end = end
    this.field_id = field_id
  }
}

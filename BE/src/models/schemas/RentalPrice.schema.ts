import { ObjectId } from 'mongodb'
import { RentalStatus } from '~/constants/enum'

interface RentalPriceType {
  _id?: ObjectId
  price: number
  start: Date
  end: Date
  field_id: ObjectId
  status: RentalStatus
}

export default class RentalPrice {
  _id?: ObjectId
  price: number
  start: Date
  end: Date
  field_id: ObjectId
  status: RentalStatus
  constructor({ _id, price, start, end, field_id, status }: RentalPriceType) {
    this._id = _id
    this.price = price
    this.start = start
    this.end = end
    this.field_id = field_id
    this.status = status
  }
}

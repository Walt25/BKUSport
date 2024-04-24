import { ObjectId } from 'mongodb'

interface PromotionType {
  _id?: ObjectId
  percentage: number
  start_date: Date
  end_date: Date
  name: string
}

export default class Promotion {
  _id?: ObjectId
  percentage: number
  start_date: Date
  end_date: Date
  name: string
  constructor(promotion: PromotionType) {
    this._id = promotion._id
    this.percentage = promotion.percentage
    this.start_date = promotion.start_date
    this.end_date = promotion.end_date
    this.name = promotion.name
  }
}

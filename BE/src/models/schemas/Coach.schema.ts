import { ObjectId } from 'mongodb'

interface CoachType {
  _id?: ObjectId
  name: string
  description: string
  rental_id?: ObjectId
}

export default class Coach {
  _id?: ObjectId
  name: string
  description: string
  rental_id?: ObjectId
  constructor(coach: CoachType) {
    this._id = coach._id
    this.name = coach.name
    this.description = coach.description
    this.rental_id = coach.rental_id
  }
}

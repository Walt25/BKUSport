import { ObjectId } from 'mongodb'

interface RefereeType {
  _id?: ObjectId
  name: string
  description: string
  rental_id: ObjectId
}

export default class Referee {
  _id?: ObjectId
  name: string
  description: string
  rental_id: ObjectId
  constructor(referee: RefereeType) {
    this._id = referee._id
    this.name = referee.name
    this.description = referee.description
    this.rental_id = referee.rental_id
  }
}

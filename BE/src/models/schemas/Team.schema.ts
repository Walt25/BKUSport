import { ObjectId } from 'mongodb'

interface TeamType {
  _id?: ObjectId
  caption_id: ObjectId
  role: string
  avatar: string
  members: ObjectId[]
}

export default class Team {
  _id?: ObjectId
  caption_id: ObjectId
  role: string
  avatar: string
  members: ObjectId[]
  constructor(team: TeamType) {
    this._id = team._id
    this.caption_id = team.caption_id
    this.role = team.role
    this.avatar = team.avatar
    this.members = team.members
  }
}

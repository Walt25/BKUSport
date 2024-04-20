import { ObjectId } from 'mongodb'
import { UserVerifyStatus } from '~/constants/enum'

interface Usertype {
  _id?: ObjectId
  username: string
  email: string
  date_of_birth?: Date
  password: string
  created_at?: Date
  updated_at?: Date
  email_verify_token?: string //jwt or ""
  verify?: UserVerifyStatus
  //Optional
  avatar?: string
}

export default class User {
  _id?: ObjectId
  username: string
  email: string
  date_of_birth: Date
  password: string
  created_at: Date
  updated_at: Date
  email_verify_token: string //jwt or ""
  verify: UserVerifyStatus
  //Optional
  avatar: string

  constructor(user: Usertype) {
    const date = new Date()
    this._id = user._id
    this.username = user.username || ''
    this.email = user.email
    this.date_of_birth = user.date_of_birth || new Date()
    this.password = user.password
    this.created_at = user.created_at || date
    this.updated_at = user.updated_at || date
    this.email_verify_token = user.email_verify_token || ''
    this.verify = user.verify || UserVerifyStatus.Unverified
    //Optional
    this.avatar = user.avatar || ''
  }
}

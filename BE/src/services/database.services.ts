import { MongoClient, Db, Collection } from 'mongodb'
import { config } from 'dotenv'
import User from '~/models/schemas/User.schema'
import RefreshToken from '~/models/schemas/RefreshToken.schema'
import Field from '~/models/schemas/Field.schema'
import Uniform from '~/models/schemas/Uniform.schema'
import RentalPrice from '~/models/schemas/RentalPrice.schema'
import Food from '~/models/schemas/Food.schema'
import Equipment from '~/models/schemas/Equipment.schema'
import UserOTPVerification from '~/models/schemas/OTP.schema'

config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.wtd1j06.mongodb.net/`

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }

  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('Ping your deployment. Connected successfully to server')
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  get users(): Collection<User> {
    return this.db.collection(process.env.DB_USER_COLLECTION as string)
  }
  
  get otpVerification(): Collection<UserOTPVerification> {
    return this.db.collection(process.env.DB_OTP_COLLECTION as string)
  }

  get refreshTokens(): Collection<RefreshToken> {
    return this.db.collection(process.env.DB_REFRESH_TOKEN_COLLECTION as string)
  }
  get fields(): Collection<Field> {
    return this.db.collection(process.env.DB_FIELD_COLLECTION as string)
  }

  get rentalPrices(): Collection<RentalPrice> {
    return this.db.collection(process.env.DB_RENTAL_PRICE_COLLECTION as string)
  }

  get uniforms(): Collection<Uniform> {
    return this.db.collection(process.env.DB_UNIFORM_COLLECTION as string)
  }

  get foods(): Collection<Food> {
    return this.db.collection(process.env.DB_FOOD_COLLECTION as string)
  }

  get equipments(): Collection<Equipment> {
    return this.db.collection('equipments')
  }
}
const databaseService = new DatabaseService()
export default databaseService

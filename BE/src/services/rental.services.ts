import Field from '~/models/schemas/Field.schema'
import databaseService from './database.services'
import { ObjectId } from 'mongodb'
import { RentalStatus } from '~/constants/enum'

class RentalPriceService {
  async updateStatus(rental_id: ObjectId, status: RentalStatus) {
    const result = databaseService.rentalPrices.findOneAndUpdate(
      { _id: new ObjectId(rental_id) },
      {
        returnDocument: 'after',
        projection: {
          status: status
        }
      }
    )
  }
}
const rentalService = new RentalPriceService()
export default rentalService

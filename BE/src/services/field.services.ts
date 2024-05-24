import Field from '~/models/schemas/Field.schema'
import databaseService from './database.services'
import { ObjectId } from 'mongodb'
import { ErrorWithStatus } from '~/models/Errors'
import HTTP_STATUS from '~/constants/httpStatus'
import { RentalStatus } from '~/constants/enum'

class FieldService {
  async addNewField(body: any) {
    const result = await databaseService.fields.insertOne(
      new Field({ images: body.images, location: body.location, name: body.name })
    )
    const field = await databaseService.fields.findOne({ _id: new ObjectId(result.insertedId) })
    return field
  }

  async getFieldById(field_id: string) {
    const field = await databaseService.fields.findOne({ _id: new ObjectId(field_id) })
    return field
  }

  async rentField(user_id: ObjectId | undefined, field_id: ObjectId, start: Date) {
    const rentalPrice = await databaseService.rentalPrices.findOne({ field_id, start })
    if (!rentalPrice) {
      throw new ErrorWithStatus({ message: 'Rental price not found', status: HTTP_STATUS.NOT_FOUND })
    }
    if (rentalPrice.status === RentalStatus.Rented) {
      throw new ErrorWithStatus({ message: 'Field has been rented', status: HTTP_STATUS.CONFLICT })
    }
    const updatedUser = await databaseService.users.updateOne(
      { _id: user_id },
      { $push: { rental_id: rentalPrice._id } }
    )
    return updatedUser
  }
}
const fieldService = new FieldService()
export default fieldService

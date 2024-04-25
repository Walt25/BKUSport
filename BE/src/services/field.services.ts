import Field from '~/models/schemas/Field.schema'
import databaseService from './database.services'
import { ObjectId } from 'mongodb'

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
}
const fieldService = new FieldService()
export default fieldService

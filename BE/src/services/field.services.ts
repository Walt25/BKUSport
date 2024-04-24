import Field from '~/models/schemas/Field.schema'
import databaseService from './database.services'
import { ObjectId } from 'mongodb'

class FieldService {
  async addNewField(body: any) {
    const result = await databaseService.fields.insertOne(new Field({ images: body.images, location: body.location }))
    const field = await databaseService.fields.findOne({ _id: new ObjectId(result.insertedId) })
    return field
  }
}
const fieldService = new FieldService()
export default fieldService

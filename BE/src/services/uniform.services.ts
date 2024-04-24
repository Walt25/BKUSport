import Uniform from '~/models/schemas/Uniform.schema'
import databaseService from './database.services'
import { ObjectId } from 'mongodb'

class UniformService {
  async addNewUniform(body: any) {
    const result = await databaseService.uniforms.insertOne(
      new Uniform({
        images: body.images,
        name: body.name,
        type: body.type,
        price: body.price,
        description: body.description
      })
    )
    const field = await databaseService.uniforms.findOne({ _id: new ObjectId(result.insertedId) })
    return field
  }
}

const uniformService = new UniformService()
export default uniformService

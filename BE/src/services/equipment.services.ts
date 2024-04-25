import databaseService from './database.services'
import { ObjectId } from 'mongodb'
import Equipment from '~/models/schemas/Equipment.schema'

class EquipmentService {
  async addNewEquipment(body: any) {
    const result = await databaseService.equipments.insertOne(
      new Equipment({
        images: body.images,
        name: body.name,
        type: body.type,
        price: body.price,
        description: body.description
      })
    )
    const equipment = await databaseService.equipments.findOne({ _id: new ObjectId(result.insertedId) })
    return equipment
  }
}

const equipmentService = new EquipmentService()
export default equipmentService

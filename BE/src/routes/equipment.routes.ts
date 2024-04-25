import { Router } from 'express'
import {
  addEquipmentController,
  getAllEquipmentController,
  getEquipmentByIdController
} from '~/controllers/equipment.controller'

import { wrapRequestHanlder } from '~/utils/handler'

const equipmentRouter = Router()

equipmentRouter.get('/', wrapRequestHanlder(getAllEquipmentController))

equipmentRouter.post('/', wrapRequestHanlder(addEquipmentController))

equipmentRouter.get('/:equipment_id', wrapRequestHanlder(getEquipmentByIdController))

export default equipmentRouter

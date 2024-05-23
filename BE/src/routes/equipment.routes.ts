import { Router } from 'express'
import {
  addEquipmentController,
  uploadImages,
  getAllEquipmentController,
  getEquipmentByIdController
} from '~/controllers/equipment.controller'
import { uploadMiddleware } from '~/middlewares/fileUpload.middlewares'

import { wrapRequestHanlder } from '~/utils/handler'


const equipmentRouter = Router()

equipmentRouter.get('/', wrapRequestHanlder(getAllEquipmentController))

equipmentRouter.post('/', wrapRequestHanlder(addEquipmentController))

equipmentRouter.get('/:equipment_id', wrapRequestHanlder(getEquipmentByIdController))

equipmentRouter.post('/upload', wrapRequestHanlder(uploadMiddleware), uploadImages)



export default equipmentRouter

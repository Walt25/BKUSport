import { Router } from 'express'
import {
  addEquipmentController,
  uploadImages,
  getAllEquipmentController,
  getEquipmentByIdController,
  updateProductById
} from '~/controllers/equipment.controller'
import { uploadMiddleware } from '~/middlewares/fileUpload.middlewares'
import { authenticate, authorizeAdmin } from '~/middlewares/users.middlewares'

import { wrapRequestHanlder } from '~/utils/handler'


const equipmentRouter = Router()

equipmentRouter.get('/', wrapRequestHanlder(getAllEquipmentController))

equipmentRouter.post('/', wrapRequestHanlder(addEquipmentController))

equipmentRouter.route('/:equipment_id')
    .get(wrapRequestHanlder(getEquipmentByIdController))
    .put(authenticate, authorizeAdmin, updateProductById)
    // .delete(authenticate, authorizeAdmin, deleteUserById)  
equipmentRouter.post('/upload', wrapRequestHanlder(uploadMiddleware), uploadImages)





export default equipmentRouter

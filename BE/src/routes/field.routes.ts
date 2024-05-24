import { Router } from 'express'
import {
  addFieldController,
  getAllFieldController,
  getFieldByIdController,
  orderFieldController
} from '~/controllers/field.controller'
import { authenticate } from '~/middlewares/users.middlewares'
import { wrapRequestHanlder } from '~/utils/handler'

const fieldRouter = Router()

fieldRouter.get('/', wrapRequestHanlder(getAllFieldController))

fieldRouter.post('/', wrapRequestHanlder(addFieldController))

fieldRouter.get('/:field_id', wrapRequestHanlder(getFieldByIdController))

fieldRouter.post('/oder/:field_id', authenticate, wrapRequestHanlder(orderFieldController))

export default fieldRouter

import { Router } from 'express'
import { addFieldController, getAllFieldController, getFieldByIdController } from '~/controllers/field.controller'
import { wrapRequestHanlder } from '~/utils/handler'

const fieldRouter = Router()

fieldRouter.get('/', wrapRequestHanlder(getAllFieldController))

fieldRouter.post('/', wrapRequestHanlder(addFieldController))

fieldRouter.get('/:field_id', wrapRequestHanlder(getFieldByIdController))

export default fieldRouter

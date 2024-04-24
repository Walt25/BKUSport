import { Router } from 'express'
import { addFieldController, getAllFieldController } from '~/controllers/field.controller'
import { wrapRequestHanlder } from '~/utils/handler'

const fieldRouter = Router()

fieldRouter.get('/', wrapRequestHanlder(getAllFieldController))

fieldRouter.post('/', wrapRequestHanlder(addFieldController))

export default fieldRouter

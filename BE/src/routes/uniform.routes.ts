import { Router } from 'express'
import { addUniformController, getAllUniformController, getUniformController } from '~/controllers/uniform.controller'

import { wrapRequestHanlder } from '~/utils/handler'

const uniformRouter = Router()

uniformRouter.get('/', wrapRequestHanlder(getAllUniformController))

uniformRouter.post('/', wrapRequestHanlder(addUniformController))

uniformRouter.get('/:uniform_id', wrapRequestHanlder(getUniformController))

export default uniformRouter

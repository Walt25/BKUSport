import { Router } from 'express'
import { addUniformController, getAllUniformController } from '~/controllers/uniform.controller'

import { wrapRequestHanlder } from '~/utils/handler'

const uniformRouter = Router()

uniformRouter.get('/', wrapRequestHanlder(getAllUniformController))

uniformRouter.post('/', wrapRequestHanlder(addUniformController))

uniformRouter.get('/:uniform_id', wrapRequestHanlder(getAllUniformController))

export default uniformRouter

import { Router } from 'express'
import {
  addUniformController,
  getAllUniformController,
  getUniformByIdController
} from '~/controllers/uniform.controller'

import { wrapRequestHanlder } from '~/utils/handler'

const uniformRouter = Router()

uniformRouter.get('/', wrapRequestHanlder(getAllUniformController))

uniformRouter.post('/', wrapRequestHanlder(addUniformController))

uniformRouter.get('/:uniform_id', wrapRequestHanlder(getUniformByIdController))

export default uniformRouter

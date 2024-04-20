import { Router } from 'express'
import { loginController } from '~/controllers/users.controller'
import { loginValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHanlder } from '~/utils/handler'

const usersRouter = Router()

/*
Description: Login
Path: /login
Method: POST
Body: {name: string, email: string}
*/
usersRouter.post('/login', loginValidator, wrapRequestHanlder(loginController))

export default usersRouter

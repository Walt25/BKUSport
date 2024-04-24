import { Router } from 'express'
import { loginController, registerController, rentNewFieldController } from '~/controllers/users.controller'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHanlder } from '~/utils/handler'

const usersRouter = Router()

/*
Description: Login
Path: /login
Method: POST
Body: {name: string, email: string}
*/
usersRouter.post('/login', loginValidator, wrapRequestHanlder(loginController))

/*
Description: Register a new user
Path: /register
Method: POST
Body: {name: string, email: string, password: string, confirm_password: string, date_of_birth: string}
*/

usersRouter.post('/register', registerValidator, wrapRequestHanlder(registerController))

/*
Description: Register a new user
Path: /register
Method: POST
Body: {name: string, email: string, password: string, confirm_password: string, date_of_birth: string}
*/

usersRouter.post('/field/:rental_id', wrapRequestHanlder(rentNewFieldController))

export default usersRouter

const express = require('express')
import { config } from 'dotenv'
import databaseService from './services/database.services'
import usersRouter from './routes/users.routes'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import fieldRouter from './routes/field.routes'
import uniformRouter from './routes/uniform.routes'
// Sử dụng hàm xác thực cho tất cả các route
config()
databaseService.connect()
const port = 4000

// Route chào mừng
const app = express()
app.use(express.json())
// Khởi chạy máy chủ
app.use('/users', usersRouter)
app.use('/fields', fieldRouter)
app.use('/uniforms', uniformRouter)
app.use(defaultErrorHandler)

const httpServer = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

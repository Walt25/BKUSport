const express = require('express')
import { config } from 'dotenv'
import databaseService from './services/database.services'
// Sử dụng hàm xác thực cho tất cả các route
config()
databaseService.connect()
const port = 4000

// Route chào mừng
const app = express()
app.use(express.json())
// Khởi chạy máy chủ

const httpServer = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

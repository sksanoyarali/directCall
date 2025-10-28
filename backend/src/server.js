import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import mongoose from 'mongoose'
import cors from 'cors'
import connectDb from './config/db.js'
import { connectToSocket } from './controllers/socketManager.js'

const app = express()

const server = createServer(app)
const io = connectToSocket(server)

const port = process.env.PORT || 3000
// middleware
app.use(cors())
app.use(express.json({ limit: '40kb' }))
app.use(express.urlencoded({ limit: '40kb', extended: true }))

app.get('/', (req, res) => {
  return res.send('server is live')
})

const start = async () => {
  try {
    await connectDb()
    server.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`)
    })
  } catch (err) {
    console.error('❌ Server startup error:', err.message)
  }
}

start()

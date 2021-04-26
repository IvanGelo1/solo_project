'use strict'

const express = require('express')
const router = require('./router')
const cors = require('cors')
const db = require('./models/index')
const dotenv = require('dotenv')

dotenv.config()

const corsConfig = {
  credentials: true,
  origin: true
}

const app = express()

app.use(cors(corsConfig))
app.use(express.json())
app.use(router);

(async function bootstrap () {
  try {
    await db.sequelize.sync()
    console.log('Database connected')
  } catch (err) {
    console.error(err)
  }

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started at ${process.env.SERVER_IP}:${process.env.SERVER_PORT}`)
  })
})()

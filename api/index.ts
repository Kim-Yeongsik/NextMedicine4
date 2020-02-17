import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
const cookieSession = require('cookie-session')
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import fs from 'fs'
import helmet from 'helmet'
import morgan from 'morgan'
import directTransport from 'nodemailer-direct-transport'
import smtpTransport from 'nodemailer-smtp-transport'
import path from 'path'

import passportStrategies from 'passport-strategies'
import routes from 'routes'

let envPath = path.resolve(process.cwd(), '.env')
if (!fs.existsSync(envPath)) {
  envPath = path.resolve(process.cwd(), '.env.defaults')
}
dotenv.config({ path: envPath })

const port = parseInt(process.env.PORT, 10) || 3001
const dev = process.env.NODE_ENV !== 'production'

const sessionSecret = process.env.SESSION_SECRET || 'development'
const sessionMaxAge = Number(process.env.SESSION_MAX_AGE || 60000 * 60 * 24 * 7)

let mailServer = directTransport(null)
if (
  process.env.EMAIL_SERVER &&
  process.env.EMAIL_USERNAME &&
  process.env.EMAIL_PASSWORD
) {
  mailServer = smtpTransport({
    host: process.env.EMAIL_SERVER,
    port: Number(process.env.EMAIL_PORT || 25),
    secure: Boolean(
      process.env.EMAIL_SECURE && process.env.EMAIL_SECURE.match(/true/i)
    ),
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  })
}

const server = express()

if (!dev) {
  server.use(compression())
} else {
  server.use(morgan('dev')) // Log HTTP requests
}

server.use(cors({ credentials: true, origin: true })) // Allow cross-origin resource sharing
server.use(helmet()) // secure HTTP headers

server.use(cookieParser()) // Parse Cookie header and populate req.cookies with an object keyed by the cookie names

server.use(bodyParser.json()) // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
server.use(bodyParser.urlencoded({ extended: true }))

server.use(
  cookieSession({
    name: 'session',
    secret: sessionSecret,
    secure: false,
    httpOnly: false,
    maxAge: sessionMaxAge
  })
)

server.set('trust proxy', 'loopback')

passportStrategies.config({ server })
routes.config({ server, mailServer })

server.listen(port, err => {
  if (err) throw err
  console.log(`> Ready on http://127.0.0.1:${port}`)
})

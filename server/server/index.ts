import * as compression from 'compression'
import * as cookieParser from 'cookie-parser'
const cookieSession = require('cookie-session')
import * as cors from 'cors'
import * as dotenv from 'dotenv'
import * as express from 'express'
import * as fs from 'fs'
import * as helmet from 'helmet'
import * as next from 'next'
import * as path from 'path'

import routes from './routes'

let envPath = path.resolve(process.cwd(), '.env')
if (!fs.existsSync(envPath)) {
  envPath = path.resolve(process.cwd(), '.env.defaults')
}
dotenv.config({ path: envPath })

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const sessionSecret = process.env.SESSION_SECRET || 'development'
const sessionMaxAge = Number(process.env.SESSION_MAX_AGE || 60000 * 60 * 24 * 7)

const app = next({ dev })
const handler = routes.getRequestHandler(app)

const forbiddenDirs = ['components', 'containers', 'templates', '__tests__']

app
  .prepare()
  .then(() => {
    // express

    const server = express()

    if (!dev) {
      server.use(compression())
    }

    server.use(cors({ credentials: true, origin: true })) // Allow cross-origin resource sharing
    server.use(helmet()) // secure HTTP headers

    server.use(cookieParser()) // Parse Cookie header and populate req.cookies with an object keyed by the cookie names

    server.use(express.static('uploads')) // 정적 파일 제공

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

    // static

    server.all('*', (req, res, next) => {
      const url = req.originalUrl

      // 금지 디렉토리 체크 (forbiddenDirs)
      for (const forbiddenDir of forbiddenDirs) {
        if (
          url.includes(`/${forbiddenDir}/`) ||
          url.endsWith(`/${forbiddenDir}`)
        ) {
          return app.render(req, res, '/_error', {})
        }
      }

      next()
    })

    // pages

    server.all('*', async (req: any, res) => handler(req, res))

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://127.0.0.1:${port}`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })

import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'
import { Op, Options, Sequelize } from 'sequelize'

let envPath = path.resolve(process.cwd(), '.env')
if (!fs.existsSync(envPath)) {
  envPath = path.resolve(process.cwd(), '.env.defaults')
}
dotenv.config({ path: envPath })

const development: Options = {
  username: process.env.DATABASE_USERNAME || 'development',
  password: process.env.DATABASE_PASSWORD || 'development',
  database: process.env.DATABASE_NAME || 'next-medicine-4',
  host: process.env.DATABASE_HOST || '127.0.0.1',
  port: Number(process.env.DATABASE_PORT || 5432),
  dialect: 'postgres',
  operatorsAliases: Op
}

const production: Options = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  dialect: 'postgres',
  logging: false,
  operatorsAliases: Op
}

const config = process.env.NODE_ENV !== 'production' ? development : production
const { database, username, password, ...options } = config

export const sequelize = new Sequelize(database, username, password, options)

export function fixModelProperties (target): void {
  return class extends target {
    constructor (...args: any[]) {
      super(...args)
      Object.keys(new.target.rawAttributes).forEach(propertyKey => {
        Object.defineProperty(this, propertyKey, {
          get () {
            return this.getDataValue(propertyKey)
          },
          set (value) {
            this.setDataValue(propertyKey, value)
          }
        })
      })
    }
  } as any
}

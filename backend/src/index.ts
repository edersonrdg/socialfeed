import expressServer from './main/server'
import { config } from 'dotenv'
import { mysqlStart } from '../src/infra/orm/typeorm'

const start = () => {
  config()
  mysqlStart()
  expressServer()
}

start()

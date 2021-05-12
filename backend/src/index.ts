import expressServer from './main/server'
import { config } from 'dotenv'

const start = () => {
  config()
  expressServer()
}

start()

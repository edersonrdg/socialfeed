import { createConnection } from 'typeorm'

export function mysqlStart () {
  createConnection().then(() => console.log('Mysql connected')).catch(error => {
    console.error(error)
  })
}

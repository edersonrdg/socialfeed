import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.send('running on ts-node-dev')
})

export default app

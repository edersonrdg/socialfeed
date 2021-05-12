import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.send('running on app')
})

export default app

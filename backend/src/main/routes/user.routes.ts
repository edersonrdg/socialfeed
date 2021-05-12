import { Router } from 'express'

const userRoute = Router()

userRoute.get('/', (request, response) => {
  return response.send('Users')
})

export default userRoute

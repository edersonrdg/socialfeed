import { Router } from 'express'
import userRoute from '../routes/user.routes'

const routes = Router()

routes.use('/users', userRoute)

export default routes

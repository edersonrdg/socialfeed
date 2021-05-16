import { Router } from 'express'
import sessionRoute from '../routes/sessions.routes'
import userRoute from '../routes/user.routes'

const routes = Router()

routes.use('/users', userRoute)
routes.use('/session', sessionRoute)

export default routes

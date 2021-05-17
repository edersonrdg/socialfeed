import { Router } from 'express'
import postRoutes from '../../main/routes/post.routes'
import sessionRoute from '../routes/sessions.routes'
import userRoute from '../routes/user.routes'

const routes = Router()

routes.use('/users', userRoute)
routes.use('/session', sessionRoute)
routes.use('/posts', postRoutes)

export default routes

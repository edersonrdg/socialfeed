import { Router } from 'express'
import { makeCreatePostController } from '../../main/factory/controllers/createPost'
import { adapt } from '../../main/adapters/express-router'
import { auth } from '../middlewares/auth'

const postRoutes = Router()

postRoutes.use(auth)
postRoutes.post('/', adapt(makeCreatePostController()))

export default postRoutes

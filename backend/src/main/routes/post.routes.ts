import { Router } from 'express'
import { makeCreatePostController } from '../../main/factory/controllers/createPost'
import { adapt } from '../../main/adapters/express-router'

const postRoutes = Router()

postRoutes.post('/', adapt(makeCreatePostController()))

export default postRoutes

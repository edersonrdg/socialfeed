import { Router } from 'express'
import { adapt } from '../adapters/express-router'
import { auth } from '../middlewares/auth'
import multer from 'multer'
import uploadConfig from '../config/upload'
import {
  makeListPostController,
  makeDeletePostController,
  makeListEspecificPostController,
  makeCreatePostController
} from '../../main/factory/controllers'

const upload = multer(uploadConfig)

const postRoutes = Router()

postRoutes.use(auth)
postRoutes.post('/', upload.single('image'), adapt(makeCreatePostController()))
postRoutes.get('/', adapt(makeListPostController()))
postRoutes.delete('/:postId', adapt(makeDeletePostController()))

postRoutes.get('/myposts', adapt(makeListEspecificPostController()))

export default postRoutes

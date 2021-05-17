import { Router } from 'express'
import { makeCreatePostController } from '../../main/factory/controllers/createPost'
import { adapt } from '../adapters/express-router'
import { auth } from '../middlewares/auth'
import multer from 'multer'
import uploadConfig from '../config/upload'
import { makeListPostController } from '../../main/factory/controllers/listPosts'
import { makeListEspecificPostController } from '../../main/factory/controllers/listEspecifcPosts'

const upload = multer(uploadConfig)

const postRoutes = Router()

postRoutes.use(auth)
postRoutes.post('/', upload.single('image'), adapt(makeCreatePostController()))
postRoutes.get('/', adapt(makeListPostController()))
postRoutes.get('/myposts', adapt(makeListEspecificPostController()))

export default postRoutes

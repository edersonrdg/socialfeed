import { Router } from 'express'
import { adapt } from '../../main/adapters/express-router'
import { makeSignInController } from '../../main/factory/controllers/signIn'

const sessionRoute = Router()

sessionRoute.post('/', adapt(makeSignInController()))

export default sessionRoute

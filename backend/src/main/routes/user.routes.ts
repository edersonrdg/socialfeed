import { Router } from 'express'
import { adapt } from '../../main/adapters/express-router'
import { makeSignUpController } from '../../main/factory/controllers/signUp'

const userRoute = Router()

userRoute.post('/', adapt(makeSignUpController()))

export default userRoute

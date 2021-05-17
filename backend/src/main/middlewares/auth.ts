import { makeAuthMiddleware } from '../factory/middlewares/auth'
import { adaptMiddleware } from '../adapters/express-middlewares'

export const auth = adaptMiddleware(makeAuthMiddleware())

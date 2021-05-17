import { JwtAdapter } from '../../../infra/cryptography/jwt-adapter'
import env from '../../config/env'
import { AuthMiddleware } from '../../../presentation/middlewares/auth'
import { Middleware } from '../../../presentation/protocols'

export const makeAuthMiddleware = (): Middleware => {
  return new AuthMiddleware(new JwtAdapter(env.jwtSecrete))
}

import { SignInService } from '../../../data/services/signIn'
import UsersRepositoryMySql from '../../../infra/orm/typeorm/repositories/UsersRepository'
import { Controller } from '../../../presentation/protocols'
import { SignInController } from '../../../presentation/controllers/signIn'
import { BcryptAdapter } from '../../../infra/cryptography/bcrypt-adapter'
import { JwtAdapter } from '../../../infra/cryptography/jwt-adapter'
import env from '../../../main/config/env'

export const makeSignInController = (): Controller => {
  const userRepository = new UsersRepositoryMySql()
  const jwtAdapter = new JwtAdapter(env.jwtSecrete)
  const signInService = new SignInService(userRepository, new BcryptAdapter(8), jwtAdapter)
  return new SignInController(signInService)
}

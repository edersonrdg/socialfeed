import { SignUpService } from '../../../data/services/signUp'
import { SignUpController } from '../../../presentation/controllers/signUp'
import { Controller } from '../../../presentation/protocols/controller'
import UsersRepositoryMySql from '../../../infra/orm/typeorm/repositories/UsersRepository'
import { BcryptAdapter } from '../../../infra/cryptography/bcrypt-adapter'

export const makeSignUpController = (): Controller => {
  const userRepository = new UsersRepositoryMySql()
  const bcrpt = new BcryptAdapter(8)
  const signUpService = new SignUpService(userRepository, bcrpt)
  return new SignUpController(signUpService)
}

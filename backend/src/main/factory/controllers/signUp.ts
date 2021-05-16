import { SignUpService } from '../../../data/services/signUp'
import { SignUpController } from '../../../presentation/controllers/signUp'
import { Controller } from '../../../presentation/protocols/controller'
import UsersRepositoryMySql from '../../../infra/orm/typeorm/repositories/UsersRepository'
import { BcryptAdapter } from '../../../infra/cryptography/bcrypt-adapter'
import { ValidationSignUp } from '../../../validators'

export const makeSignUpController = (): Controller => {
  const userRepository = new UsersRepositoryMySql()
  const signUpService = new SignUpService(userRepository, new BcryptAdapter(8))
  return new SignUpController(signUpService, new ValidationSignUp())
}

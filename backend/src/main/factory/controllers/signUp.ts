import { SignUpService } from '../../../data/services/signUp'
import { SignUpController } from '../../../presentation/controllers/signUp'
import { Controller } from '../../../presentation/protocols/controller'
import UsersRepositoryMySql from '../../../infra/orm/typeorm/repositories/UsersRepository'

export const makeSignUpController = (): Controller => {
  const userRepository = new UsersRepositoryMySql()
  const signUpService = new SignUpService(userRepository)
  return new SignUpController(signUpService)
}

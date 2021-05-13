import { UserRepositoryMemory } from '../../../infra/orm/memory/UserRepositoryMemory'
import { SignUpService } from '../../../data/services/signUp'
import { SignUpController } from '../../../presentation/controllers/signUp'
import { Controller } from '../../../presentation/protocols/controller'

export const makeSignUpController = (): Controller => {
  const userRepository = new UserRepositoryMemory()
  const signUpService = new SignUpService(userRepository)
  return new SignUpController(signUpService)
}

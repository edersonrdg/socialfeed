import { SignUpService } from '../../../data/services/signUp'
import { SignUpController } from '../../../presentation/controllers/signUp'
import { Controller } from '../../../presentation/protocols/controller'

export const makeSignUpController = (): Controller => {
  const signUpService = new SignUpService()
  return new SignUpController(signUpService)
}

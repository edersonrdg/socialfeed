import { SignUpController } from '../../../presentation/controllers/signUp'
import { Controller } from '../../../presentation/protocols/controller'

export const makeSignUpController = (): Controller => {
  return new SignUpController()
}

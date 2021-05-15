import { ValidationSignUp } from '../../validators'
import { CreateUserRequest } from '../../domain/models/User'
import { SignUp } from '../../domain/userCases/signUp'
import { Controller } from '../../presentation/protocols/controller'
import { HttpResponse } from '../../presentation/protocols/http'

export class SignUpController implements Controller {
  constructor (private readonly signUp: SignUp) {}
  async handle (request: CreateUserRequest): Promise<HttpResponse> {
    const validateData = ValidationSignUp(request)
    const body = await this.signUp.execute(validateData)
    return { body, statusCode: 200 }
  }
}

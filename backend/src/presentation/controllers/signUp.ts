import { CreateUserRequest } from '../../domain/models/User'
import { SignUp } from '../../domain/userCases/signUp'
import { Controller } from '../../presentation/protocols/controller'
import { HttpResponse } from '../../presentation/protocols/http'
import { Validation } from 'presentation/protocols'

export class SignUpController implements Controller {
  constructor (
    private readonly signUp: SignUp,
    private readonly validation: Validation) {}

  async handle (request: CreateUserRequest): Promise<HttpResponse> {
    this.validation.validate(request)
    const body = await this.signUp.execute(request)
    return { body, statusCode: 200 }
  }
}

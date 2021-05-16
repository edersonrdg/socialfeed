import { SignUpRequest } from '../../domain/models/User'
import { SignUp } from '../../domain/userCases/signUp'
import { Controller } from '../../presentation/protocols/controller'
import { HttpResponse } from '../../presentation/protocols/http'
import { Validation } from 'presentation/protocols'

export class SignUpController implements Controller {
  constructor (private readonly signUp: SignUp,
    private readonly validation: Validation) {}

  async handle (request: SignUpRequest): Promise<HttpResponse> {
    this.validation.validate(request)
    await this.signUp.execute(request)
    return { statusCode: 200 }
  }
}

import { CreateUserRequest } from '../../domain/models/User'
import { SignUp } from '../../domain/userCases/signUp'
import { Controller } from '../../presentation/protocols/controller'
import { HttpResponse } from '../../presentation/protocols/http'

export class SignUpController implements Controller {
  constructor (private readonly signUp: SignUp) {}
  async handle (request: CreateUserRequest): Promise<HttpResponse> {
    const response = await this.signUp.execute(request)
    return {
      body: response,
      statusCode: 201
    }
  }
}

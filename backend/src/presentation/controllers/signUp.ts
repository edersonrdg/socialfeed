import { Controller } from '../../presentation/protocols/controller'
import { HttpResponse } from '../../presentation/protocols/http'

type Request = {
  email: string,
  password: string,
  confirmPassword: string
}

export class SignUpController implements Controller {
  async handle (request: Request): Promise<HttpResponse> {
    return {
      body: request,
      statusCode: 200
    }
  }
}

import { LoginUserData } from '../../domain/models/User'
import { SignIn } from '../../domain/userCases/signIn'
import { Controller, HttpResponse } from '../../presentation/protocols'

export class SignInController implements Controller {
  constructor (public readonly authUser: SignIn) {}

  async handle (request: LoginUserData): Promise<HttpResponse> {
    const body = await this.authUser.execute(request)
    return { body, statusCode: 200 }
  }
}

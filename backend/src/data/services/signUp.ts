import { SignUp, SignUpParams, SignUpResult } from '../../domain/userCases/signUp'

export class SignUpService implements SignUp {
  async execute (data: SignUpParams): Promise<SignUpResult> {
    const response = { id: '123', email: data.email }
    return response
  }
}

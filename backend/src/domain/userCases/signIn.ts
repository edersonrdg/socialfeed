import { SignInRequest, SignInResponse } from '../../domain/models/User'

export interface SignIn {
  execute: (account: SignInRequest) => Promise<SignInResponse>
}

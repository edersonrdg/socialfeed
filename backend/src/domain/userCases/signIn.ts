import { LoginUserData, LoginUserResponse } from '../../domain/models/User'

export interface SignIn {
  execute: (account: LoginUserData) => Promise<LoginUserResponse>
}

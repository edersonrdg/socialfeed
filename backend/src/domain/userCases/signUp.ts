import { SignUpRequest } from '../models/User'

export interface SignUp {
  execute: (account: SignUpRequest) => Promise<void>
}

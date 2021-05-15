import { CreateUserRequest, CreateUserResponse } from '../../domain/models/User'

export interface SignUp {
  execute: (account: CreateUserRequest) => Promise<CreateUserResponse>
}

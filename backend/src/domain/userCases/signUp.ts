import { CreateUserDb } from '../../data/models/User'
import { CreateUserResponse } from '../../domain/models/User'

export interface SignUp {
  execute: (account: CreateUserDb) => Promise<CreateUserResponse>
}

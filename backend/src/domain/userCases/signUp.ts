import { CreateUserDb } from '../../data/models/User'

export interface SignUp {
  execute: (account: CreateUserDb) => Promise<void>
}

import { CreateUserResponse } from '../../domain/models/User'

export type CreateUserDb = {
  email: string
  password: string
}

export type CreateUserResponseDB = CreateUserResponse

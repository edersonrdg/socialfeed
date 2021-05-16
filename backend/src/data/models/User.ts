import { CreateUserResponse } from '../../domain/models/User'

export type CreateUserDb = {
  name: string
  email: string
  password: string
}

export type CreateUserResponseDB = CreateUserResponse

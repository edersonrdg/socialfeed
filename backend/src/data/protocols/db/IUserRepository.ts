import { CreateUserDb, CreateUserResponseDB } from '../../../data/models/User'

export interface UserRepository {
  add: (data: CreateUserDb) => Promise<void>;

  getByEmail: (email: string) => Promise<CreateUserResponseDB | undefined>

  getById: (id: string) => Promise<CreateUserResponseDB | undefined>
}

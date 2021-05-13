import { CreateUserDb, CreateUserResponseDB } from '../../data/models/User'

export interface UserRepository {
  add: (data: CreateUserDb) => Promise<CreateUserResponseDB>
}

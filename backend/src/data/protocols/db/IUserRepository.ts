import Users from '../../../infra/orm/typeorm/models/User'
import { CreateUserDb, CreateUserResponseDB } from '../../../data/models/User'

export interface UserRepository {
  add: (data: CreateUserDb) => Promise<CreateUserResponseDB>;

  getByEmail: (email: string) => Promise<Users | undefined>

}

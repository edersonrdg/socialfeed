import Users from '../../../infra/orm/typeorm/models/User'
import { CreateUserDb } from '../../../data/models/User'

export interface UserRepository {
  add: (data: CreateUserDb) => Promise<void>;

  getByEmail: (email: string) => Promise<Users | undefined>

}

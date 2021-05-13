import { UserRepository } from '../../../data/protocols/IUserRepository'
import { CreateUserDb, CreateUserResponseDB } from '../../../data/models/User'

export class UserRepositoryMemory implements UserRepository {
  async add (data: CreateUserDb): Promise<CreateUserResponseDB> {
    const users = []

    const createdUser = { id: '123', ...data }
    users.push(createdUser)

    console.log(users)
    return { id: '123', email: data.email }
  }
}

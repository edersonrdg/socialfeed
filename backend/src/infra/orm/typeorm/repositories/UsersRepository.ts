import { EntityRepository, getRepository } from 'typeorm'
import Users from '../models/User'
import { UserRepository } from '../../../../data/protocols/db/IUserRepository'
import { CreateUserDb, CreateUserResponseDB } from '../../../../data/models/User'

@EntityRepository(Users)
class UsersRepositoryMySql implements UserRepository {
  async add ({ email, password }: CreateUserDb): Promise<CreateUserResponseDB> {
    const userRepositoryTypeORM = getRepository(Users)

    const user = userRepositoryTypeORM.create({
      email,
      password
    })

    const { id } = await userRepositoryTypeORM.save(user)

    return { id, email }
  }

  async getByEmail (email: string): Promise<Users | undefined> {
    const userRepositoryTypeORM = getRepository(Users)
    const user = await userRepositoryTypeORM.findOne({
      where: { email }
    })

    return user
  }
}

export default UsersRepositoryMySql

import { EntityRepository, getRepository } from 'typeorm'
import Users from '../models/User'
import { UserRepository } from '../../../../data/protocols/db/IUserRepository'
import { CreateUserDb, CreateUserResponseDB } from '../../../../data/models/User'

@EntityRepository(Users)
class UsersRepositoryMySql implements UserRepository {
  async add ({ email, password, name }: CreateUserDb): Promise<void> {
    const userRepositoryTypeORM = getRepository(Users)

    const user = userRepositoryTypeORM.create({
      email,
      password,
      name
    })

    await userRepositoryTypeORM.save(user)
  }

  async getByEmail (email: string): Promise<CreateUserResponseDB | undefined> {
    const userRepositoryTypeORM = getRepository(Users)
    const user = await userRepositoryTypeORM.findOne({
      where: { email }
    })

    return user
  }

  async getById (id: string): Promise<CreateUserResponseDB | undefined> {
    const userRepositoryTypeORM = getRepository(Users)
    const user = await userRepositoryTypeORM.findOne({
      where: { id }
    })
    return user
  }
}

export default UsersRepositoryMySql

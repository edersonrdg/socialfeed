import { BadRequestError } from '../../presentation/errors'
import { UserRepository } from '../../data/protocols/db/IUserRepository'
import { SignUp } from '../../domain/userCases/signUp'
import { Hasher } from '../../data/protocols/cryptography'
import { CreateUserDb } from '../../data/models/User'

export class SignUpService implements SignUp {
  constructor (
    private readonly userRespository: UserRepository,
    private readonly hash: Hasher) {}

  async execute ({ email, password, name }: CreateUserDb): Promise<void> {
    const emailExists = await this.userRespository.getByEmail(email)
    if (emailExists) throw new BadRequestError('Email already exists', 403)

    const hashedPassword = await this.hash.hash(password)

    await this.userRespository.add({ name, email, password: hashedPassword })
  }
}

import { BadRequestError } from '../../presentation/errors'
import { UserRepository } from '../../data/protocols/db/IUserRepository'
import { CreateUserResponse } from '../../domain/models/User'
import { SignUp } from '../../domain/userCases/signUp'
import { Hasher } from '../../data/protocols/cryptography'
import { CreateUserDb } from '../../data/models/User'

export class SignUpService implements SignUp {
  constructor (
    private readonly userRespository: UserRepository,
    private readonly hash: Hasher) {}

  async execute ({ email, password }: CreateUserDb): Promise<CreateUserResponse> {
    const validEmail = await this.userRespository.getByEmail(email)
    if (validEmail) throw new BadRequestError('Email already exists', 403)

    const hashedPassword = await this.hash.hash(password)
    const createUser = await this.userRespository.add({ email, password: hashedPassword })

    return createUser
  }
}

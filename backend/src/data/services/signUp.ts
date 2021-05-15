import { BadRequestError } from '../../presentation/errors'
import { UserRepository } from '../../data/protocols/db/IUserRepository'
import { CreateUserRequest, CreateUserResponse } from '../../domain/models/User'
import { SignUp } from '../../domain/userCases/signUp'
import { Hasher } from '../../data/protocols/cryptography'

export class SignUpService implements SignUp {
  constructor (
    private readonly userRespository: UserRepository,
    private readonly hash: Hasher) {}

  async execute ({ email, password, confirmPassword }: CreateUserRequest): Promise<CreateUserResponse> {
    if (password !== confirmPassword) throw new BadRequestError('Confirm Password must be equal than password')

    const validEmail = await this.userRespository.getByEmail(email)
    if (validEmail) throw new BadRequestError('Email already exists', 403)

    const hashedPassword = await this.hash.hash(password)
    const createUser = await this.userRespository.add({ email, password: hashedPassword })

    return createUser
  }
}

import { BadRequestError } from '../../presentation/errors'
import { UserRepository } from '../../data/protocols/IUserRepository'
import { CreateUserRequest, CreateUserResponse } from '../../domain/models/User'
import { SignUp } from '../../domain/userCases/signUp'

export class SignUpService implements SignUp {
  constructor (private readonly userRespository: UserRepository) {}
  async execute ({ email, password, confirmPassword }: CreateUserRequest): Promise<CreateUserResponse> {
    if (password !== confirmPassword) {
      console.log('confirm password invalid')
    }

    const validEmail = await this.userRespository.getByEmail(email)
    if (validEmail) throw new BadRequestError('Email already exists', 403)

    // const createUser = await this.userRespository.add({ email, password })

    return { id: 'qwe', email: email }
  }
}

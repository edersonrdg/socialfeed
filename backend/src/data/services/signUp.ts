import { UserRepository } from '../../data/protocols/IUserRepository'
import { CreateUserRequest, CreateUserResponse } from '../../domain/models/User'
import { SignUp } from '../../domain/userCases/signUp'

export class SignUpService implements SignUp {
  constructor (private readonly userRespository: UserRepository) {}
  async execute ({ email, password, confirmPassword }: CreateUserRequest): Promise<CreateUserResponse> {
    if (password !== confirmPassword) {
      console.log('confirm password invalid')
    }
    const createUser = await this.userRespository.add({ email, password })

    return createUser
  }
}

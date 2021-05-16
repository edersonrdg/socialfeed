import { LoginUserData, LoginUserResponse } from '../../domain/models/User'
import { UserRepository } from '../../data/protocols/db/IUserRepository'
import { SignIn } from '../../domain/userCases/signIn'
import { BadRequestError } from '../../presentation/errors'
import { Encrypter, HashComparer } from '../../data/protocols/cryptography'

export class SignInService implements SignIn {
  constructor (private readonly userRespository: UserRepository,
    private readonly compare: HashComparer,
    private readonly encrypt: Encrypter) {}

  async execute ({ email, password }: LoginUserData): Promise<LoginUserResponse> {
    const user = await this.userRespository.getByEmail(email)
    if (!user) throw new BadRequestError('Incorrect email/password combination')

    const passwordMathed = await this.compare.compare(password, user.password)
    if (!passwordMathed) throw new BadRequestError('Incorrect email/password combination')

    const token = await this.encrypt.encrypt(user.id)
    return { ...{ token }, ...user }
  }
}

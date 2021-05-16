import { SignInRequest, SignInResponse } from '../../domain/models/User'
import { UserRepository } from '../../data/protocols/db/IUserRepository'
import { SignIn } from '../../domain/userCases/signIn'
import { BadRequestError } from '../../domain/errors'
import { Encrypter, HashComparer } from '../../data/protocols/cryptography'

export class SignInService implements SignIn {
  constructor (private readonly userRespository: UserRepository,
    private readonly compare: HashComparer,
    private readonly encrypt: Encrypter) {}

  async execute ({ email, password }: SignInRequest): Promise<SignInResponse> {
    const user = await this.userRespository.getByEmail(email)
    if (!user) throw new BadRequestError('Incorrect email/password combination')

    const passwordMathed = await this.compare.compare(password, user.password || '')
    if (!passwordMathed) throw new BadRequestError('Incorrect email/password combination')

    delete user.password

    const token = await this.encrypt.encrypt(user.id)
    return { ...{ token }, ...user }
  }
}

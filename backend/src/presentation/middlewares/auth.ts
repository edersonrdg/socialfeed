import { BadRequestError } from '../../domain/errors'
import { Decrypter } from '../../data/protocols/cryptography'
import { Middleware } from '../../presentation/protocols'
import { Request } from 'express'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly decrypter: Decrypter
  ) {}

  async handle (request: Request): Promise<void> {
    const auth = request.headers.authorization

    if (!auth) throw new BadRequestError('Missing token authentication', 401)

    const [, token] = auth.split(' ')

    const { sub } = await this.decrypter.decrypt(token).catch(() => {
      throw new BadRequestError('Invalid token authentication', 401)
    })

    request.userId = sub
  }
}

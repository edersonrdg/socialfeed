import { Encrypter, Decrypter } from '../../data/protocols/cryptography'

import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}

  async encrypt (userId: string): Promise<string> {
    return jwt.sign({}, this.secret, {
      subject: userId,
      expiresIn: '1d'
    })
  }

  async decrypt (ciphertext: string): Promise<string> {
    return jwt.verify(ciphertext, this.secret) as any
  }
}

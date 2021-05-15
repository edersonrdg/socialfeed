import { CreateUserRequest } from '../domain/models/User'
import { BadRequestError } from '../presentation/errors'
import { Validation } from '../presentation/protocols'

export class RequiredFieldValidation implements Validation {
  constructor (private readonly data: CreateUserRequest | undefined) {}

  validate (): Error | void {
    if (!this.data?.email) throw new BadRequestError('Email is required')
    if (!this.data?.password) throw new BadRequestError('Password is required')
    if (!this.data?.confirmPassword) throw new BadRequestError('confirm Password is required')
  }
}

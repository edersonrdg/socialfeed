import { BadRequestError } from '../../src/domain/errors'

import { Validation } from '../presentation/protocols'

export class RequiredFieldValidation implements Validation {
  constructor (private readonly input: string,
    private readonly field: string) {}

  validate (): Error | void {
    if (!this.input) throw new BadRequestError(`${this.field} is required`)
  }
}

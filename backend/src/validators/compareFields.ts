import { Validation } from '../presentation/protocols'
import { BadRequestError } from '../presentation/errors'

export class CompareFieldsValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly fieldToCompareName: string
  ) {}

  validate (): Error | void {
    if (this.fieldName !== this.fieldToCompareName) {
      throw new BadRequestError('Confirm password must be equal to password')
    }
  }
}

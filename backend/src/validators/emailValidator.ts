import { BadRequestError } from '../presentation/errors'
import { Validation } from '../presentation/protocols'

export class EmailValidator implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (): Error | void {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const isValid = re.test(this.fieldName)
    if (!isValid) {
      throw new BadRequestError('Invalid email')
    }
  }
}

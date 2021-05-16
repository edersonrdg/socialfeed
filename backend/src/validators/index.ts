import { Validation } from '../presentation/protocols'
import { CompareFieldsValidation } from './compareFields'
import { EmailValidator } from './emailValidator'
import { RequiredFieldValidation } from './requiredFields'

type requiredValid = {
  [email: string]: string,
}

export class ValidationSignUp implements Validation {
  validate (data: any) {
    const requiredValidData:requiredValid = data

    const requiredFields = ['email', 'name', 'password', 'confirmPassword']
    for (const field of requiredFields) {
      new RequiredFieldValidation(requiredValidData[field], field).validate()
    }
    new CompareFieldsValidation(data.password, data.confirmPassword).validate()
    new EmailValidator(data.email).validate()
  }
}

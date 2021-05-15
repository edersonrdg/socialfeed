import { CreateUserRequest } from '../domain/models/User'
import { CompareFieldsValidation } from './compareFields'
import { EmailValidator } from './emailValidator'
import { RequiredFieldValidation } from './requiredFields'

export function Validation (data: CreateUserRequest) {
  new RequiredFieldValidation(data).validate()
  new CompareFieldsValidation(data.password, data.confirmPassword).validate()
  new EmailValidator(data.email).validate()

  return data
}

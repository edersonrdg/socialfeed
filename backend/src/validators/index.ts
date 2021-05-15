import { CreateUserRequest } from '../domain/models/User'
import { CompareFieldsValidation } from './compareFields'
import { EmailValidator } from './emailValidator'
import { RequiredFieldValidation } from './requiredFields'

type requiredValid = {
  [email: string]: string,
}

export function ValidationSignUp (data: CreateUserRequest): CreateUserRequest {
  const requiredValidData:requiredValid = data

  const requiredFields = ['email', 'password', 'confirmPassword']
  for (const field of requiredFields) {
    new RequiredFieldValidation(requiredValidData[field], field).validate()
  }
  new CompareFieldsValidation(data.password, data.confirmPassword).validate()
  new EmailValidator(data.email).validate()

  return data
}

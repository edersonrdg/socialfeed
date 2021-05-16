import { BadRequestError } from '../../../src/presentation/errors'
import { ValidationSignUp } from '../../../src/validators'

const makeSut = () => {
  return new ValidationSignUp()
}

describe('Validate', () => {
  it('should return Error if no email is provided', () => {
    const validation = makeSut()
    const request = {
      password: 'any',
      confirmPassword: 'any'
    }
    try {
      validation.validate(request)
    } catch (error) {
      expect(error).toEqual(new BadRequestError('email is required'))
    }
  })
  it('should return Error if no password is provided', () => {
    const validation = makeSut()
    const request = {
      email: 'email@gmail.com',
      confirmPassword: 'any'
    }
    try {
      validation.validate(request)
    } catch (error) {
      expect(error).toEqual(new BadRequestError('password is required'))
    }
  })
  it('should return Error if no confirm password is provided', () => {
    const validation = makeSut()
    const request = {
      email: 'email@gmail.com',
      password: 'any'
    }
    try {
      validation.validate(request)
    } catch (error) {
      expect(error).toEqual(new BadRequestError('confirmPassword is required'))
    }
  })
})

import { BadRequestError } from '../../../src/domain/errors'
import { ValidationSignUp } from '../../../src/validators'

const makeSut = () => {
  return new ValidationSignUp()
}

describe('Validate', () => {
  it('should return Error if no email is provided', () => {
    const validation = makeSut()
    const request = {
      name: 'any',
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
      name: 'any',
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
      name: 'any',
      email: 'email@gmail.com',
      password: 'any'
    }
    try {
      validation.validate(request)
    } catch (error) {
      expect(error).toEqual(new BadRequestError('confirmPassword is required'))
    }
  })
  it('should return Error if password is diferent than confirmPassword', () => {
    const validation = makeSut()
    const request = {
      name: 'any',
      email: 'email@gmail.com',
      password: 'any',
      confirmPassword: 'diferent any'

    }
    try {
      validation.validate(request)
    } catch (error) {
      expect(error).toEqual(new BadRequestError('Confirm password must be equal to password'))
    }
  })
  it('should return Error if invalid email is provided', () => {
    const validation = makeSut()
    const request = {
      name: 'any',
      email: 'email@',
      password: 'any',
      confirmPassword: 'any'

    }
    try {
      validation.validate(request)
    } catch (error) {
      expect(error).toEqual(new BadRequestError('Invalid email'))
    }
  })
})

import { SignUp } from '../../../src/domain/userCases/signUp'
import { SignUpRequest } from '../../../src/domain/models/User'
import { SignUpController } from '../../../src/presentation/controllers/signUp'
import { Validation } from '../../../src/presentation/protocols'

const makeaddAccount = () => {
  class AddAccountStub implements SignUp {
    async execute (account: SignUpRequest): Promise<void> {
      return await new Promise(resolve => resolve())
    }
  }
  return new AddAccountStub()
}

const makeValidation = () => {
  class ValidationSignUpStub implements Validation {
    validate (data: SignUpRequest): Error | void {
    }
  }
  return new ValidationSignUpStub()
}

const makeSut = () => {
  const signUpService = makeaddAccount()
  const validation = makeValidation()
  const sut = new SignUpController(signUpService, validation)
  return { sut, signUpService, validation }
}

describe('SignUp controller', () => {
  it('should return 200 if valid data is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        email: 'valid_email@gmail.com',
        name: 'any',
        password: 'valid_password',
        confirmPassword: 'valid_password'
      }
    }
    const httpResponse = await sut.handle(httpRequest.body)
    expect(httpResponse.statusCode).toBe(200)
  })
  it('should call validation with correct values', async () => {
    const { sut, validation } = makeSut()
    const spyValidate = jest.spyOn(validation, 'validate')
    const httpRequest = {
      body: {
        email: 'valid_email@gmail.com',
        name: 'any',
        password: 'valid_password',
        confirmPassword: 'valid_password'
      }
    }
    await sut.handle(httpRequest.body)
    expect(spyValidate).toHaveBeenCalledWith(httpRequest.body)
  })
  it('should call signUpService with correct values', async () => {
    const { sut, signUpService } = makeSut()
    const spyService = jest.spyOn(signUpService, 'execute')
    const httpRequest = {
      body: {
        email: 'valid_email@gmail.com',
        name: 'any',
        password: 'valid_password',
        confirmPassword: 'valid_password'
      }
    }
    await sut.handle(httpRequest.body)
    expect(spyService).toHaveBeenCalledWith(httpRequest.body)
  })
})

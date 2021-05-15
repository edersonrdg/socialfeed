import { SignUp } from '../../../src/domain/userCases/signUp'
import { CreateUserRequest, CreateUserResponse } from '../../../src/domain/models/User'
import { SignUpController } from '../../../src/presentation/controllers/signUp'

const makeaddAccount = () => {
  class AddAccountStub implements SignUp {
    async execute (account: CreateUserRequest): Promise<CreateUserResponse> {
      const fakeaccount = {
        id: 'valid_id',
        email: account.email
      }
      return await new Promise(resolve => resolve(fakeaccount))
    }
  }
  return new AddAccountStub()
}

const makeSut = () => {
  const signUpService = makeaddAccount()
  const sut = new SignUpController(signUpService)
  return { sut }
}

describe('SignUp controller', () => {
  it('should return 200 if valid data is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        email: 'valid_email@gmail.com',
        password: 'valid_password',
        confirmPassword: 'valid_password'
      }
    }
    const httpResponse = await sut.handle(httpRequest.body)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual({
      id: 'valid_id',
      email: 'valid_email@gmail.com'
    })
  })
})

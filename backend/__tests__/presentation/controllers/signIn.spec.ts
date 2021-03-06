import { SignIn } from '../../../src/domain/userCases/signIn'
import { SignInRequest, SignInResponse } from '../../../src/domain/models/User'
import { SignInController } from '../../../src/presentation/controllers/signIn'

const makeAuth = () => {
  class AuthStub implements SignIn {
    async execute (account: SignInRequest): Promise<SignInResponse> {
      const fakeaccount = {
        id: '123',
        name: 'any',
        email: account.email,
        created_at: new Date(13, 23, 2000),
        updated_at: new Date(13, 10, 2000),
        token: 'qowkdowqkdoqwkdoo1k2do12ko21'
      }

      return await new Promise(resolve => resolve(fakeaccount))
    }
  }
  return new AuthStub()
}

const makeSut = () => {
  const signInService = makeAuth()
  const sut = new SignInController(signInService)
  return { sut, signInService }
}

describe('SignUp controller', () => {
  it('should return 200 if valid data is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        email: 'valid_email@gmail.com',
        password: 'valid_password'
      }
    }

    const httpResponse = await sut.handle(httpRequest.body)

    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual({
      id: '123',
      email: httpRequest.body.email,
      name: 'any',
      created_at: new Date(13, 23, 2000),
      updated_at: new Date(13, 10, 2000),
      token: 'qowkdowqkdoqwkdoo1k2do12ko21'
    })
  })
  it('should call signInService with correct values', async () => {
    const { sut, signInService } = makeSut()
    const spyService = jest.spyOn(signInService, 'execute')
    const httpRequest = {
      body: {
        email: 'valid_email@gmail.com',
        password: 'valid_password'
      }
    }
    await sut.handle(httpRequest.body)
    expect(spyService).toHaveBeenCalledWith(httpRequest.body)
  })
})

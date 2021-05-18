import { CreatePost } from '../../../src/domain/userCases/CreatePost'
import { CreatePostController } from '../../../src/presentation/controllers/'
import { Validation } from '../../../src/presentation/protocols'
import { CreatePostRequest, CreatePostResponse } from '../../../src/domain/models/Post'

const makeCreatePostService = () => {
  class CreatePostStub implements CreatePost {
    async execute (account: CreatePostRequest): Promise<CreatePostResponse> {
      const fakePost = {
        id: '123',
        image: account.image,
        description: account.description,
        authorId: account.authorId,
        created_at: new Date(13, 23, 2000),
        updated_at: new Date(13, 10, 2000)
      }
      return await new Promise(resolve => resolve(fakePost))
    }
  }
  return new CreatePostStub()
}

const makeValidation = () => {
  class ValidationSignUpStub implements Validation {
    validate (data: CreatePostRequest): Error | void {
    }
  }
  return new ValidationSignUpStub()
}

const makeSut = () => {
  const createPostService = makeCreatePostService()
  const validation = makeValidation()
  const sut = new CreatePostController(validation, createPostService)
  return { sut, createPostService }
}

describe('Create post controller', () => {
  it('should return 200 if valid data is provided', async () => {
    const { sut } = makeSut()
    const request = {
      image: 'any_image',
      filename: 'any_image',
      description: 'any_description',
      authorId: '123'
    }

    const { statusCode, body } = await sut.handle(request)

    expect(statusCode).toBe(200)
    expect(body).toEqual({
      id: '123',
      image: 'any_image',
      description: 'any_description',
      authorId: '123',
      created_at: new Date(13, 23, 2000),
      updated_at: new Date(13, 10, 2000)
    })
  })
})

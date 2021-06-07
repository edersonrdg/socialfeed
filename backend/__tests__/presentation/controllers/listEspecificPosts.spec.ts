import { CreatePostResponse } from '../../../src/domain/models/Post'
import { LIstEspecificPosts } from '../../../src/domain/userCases/ListPosts'
import { ListEspecificPostsController } from '../../../src/presentation/controllers'

const makeListPosts = () => {
  class ListPostsStub implements LIstEspecificPosts {
    async execute (authorId: string): Promise<CreatePostResponse[]> {
      return await new Promise(resolve => resolve([{
        id: '123',
        image: 'eqwe',
        authorId: authorId,
        created_at: new Date(13, 23, 2000),
        updated_at: new Date(13, 23, 2000)
      }, {
        id: '321',
        image: 'nenhuma',
        authorId: authorId,
        created_at: new Date(13, 23, 2000),
        updated_at: new Date(13, 23, 2000)
      }]))
    }
  }
  return new ListPostsStub()
}

const makeSut = () => {
  const listEspecificPostsService = makeListPosts()
  const sut = new ListEspecificPostsController(listEspecificPostsService)
  return { sut, listEspecificPostsService }
}

describe('List Posts controller', () => {
  it('should return 200', async () => {
    const { sut } = makeSut()

    const { statusCode, body } = await sut.handle({ authorId: '123' })

    expect(statusCode).toBe(200)
    expect(body).toEqual([{
      id: '123',
      image: 'eqwe',
      authorId: '123',
      created_at: new Date(13, 23, 2000),
      updated_at: new Date(13, 23, 2000)
    }, {
      id: '321',
      image: 'nenhuma',
      authorId: '123',
      created_at: new Date(13, 23, 2000),
      updated_at: new Date(13, 23, 2000)
    }])
  })
})

import { CreatePostResponse } from '../../../src/domain/models/Post'
import { LIstPosts } from '../../../src/domain/userCases/ListPosts'
import { ListPostsController } from '../../../src/presentation/controllers'

const makeListPosts = () => {
  class ListPostsStub implements LIstPosts {
    async execute (): Promise<CreatePostResponse[]> {
      return await new Promise(resolve => resolve([{
        id: '123',
        image: 'eqwe',
        authorId: '123',
        created_at: new Date(13, 23, 2000),
        updated_at: new Date(13, 23, 2000)
      }, {
        id: '321',
        image: 'nenhuma',
        authorId: 'qwe123',
        created_at: new Date(13, 23, 2000),
        updated_at: new Date(13, 23, 2000)
      }]))
    }
  }
  return new ListPostsStub()
}

const makeSut = () => {
  const listPostService = makeListPosts()
  const sut = new ListPostsController(listPostService)
  return { sut, listPostService }
}

describe('List Posts controller', () => {
  it('should return 200', async () => {
    const { sut } = makeSut()

    const { statusCode, body } = await sut.handle()

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
      authorId: 'qwe123',
      created_at: new Date(13, 23, 2000),
      updated_at: new Date(13, 23, 2000)
    }])
  })
})

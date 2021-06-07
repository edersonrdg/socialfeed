import { DeletePostRequest } from '../../../src/domain/models/Post'
import { DeletePostController } from '../../../src/presentation/controllers'
import { DeletePost } from '../../../src/domain/userCases/DeletePost'

const makeDeletePost = () => {
  class DeletePostStub implements DeletePost {
    async execute (account: DeletePostRequest): Promise<void> {
      return await new Promise(resolve => resolve())
    }
  }
  return new DeletePostStub()
}

const makeSut = () => {
  const deletePostService = makeDeletePost()
  const sut = new DeletePostController(deletePostService)
  return { sut, deletePostService }
}

describe('Delete Post Controller', () => {
  it('should return 200', async () => {
    const { sut } = makeSut()
    const request = {
      authorId: '123',
      postId: '123'
    }

    const { statusCode } = await sut.handle(request)

    expect(statusCode).toBe(200)
  })
})

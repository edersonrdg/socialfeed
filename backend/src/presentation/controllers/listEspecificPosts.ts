import { LIstEspecificPosts } from '../../domain/userCases/ListPosts'
import { Controller, HttpResponse } from '../../presentation/protocols'

export class ListEspecificPostsController implements Controller {
  constructor (private readonly listPosts: LIstEspecificPosts) {}

  async handle (request: { authorId: string }): Promise<HttpResponse> {
    const posts = await this.listPosts.execute(request.authorId)
    return { body: posts, statusCode: 200 }
  }
}

import { LIstPosts } from '../../domain/userCases/ListPosts'
import { Controller, HttpResponse } from '../../presentation/protocols'

export class ListPostsController implements Controller {
  constructor (private readonly listPosts: LIstPosts) {}

  async handle (): Promise<HttpResponse> {
    const posts = await this.listPosts.execute()
    return { body: posts, statusCode: 200 }
  }
}

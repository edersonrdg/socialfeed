import { DeletePost } from '../../domain/userCases/DeletePost'
import { DeletePostRequest } from '../../domain/models/Post'
import { Controller, HttpResponse } from '../../presentation/protocols'

export class DeletePostController implements Controller {
  constructor (private readonly deletePost: DeletePost) {}

  async handle (request: DeletePostRequest): Promise<HttpResponse> {
    await this.deletePost.execute(request)
    return { statusCode: 200 }
  }
}

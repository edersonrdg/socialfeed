import { CreatePost } from '../../domain/userCases/CreatePost'
import { CreatePostRequest } from '../../domain/models/Post'
import { Controller, HttpResponse, Validation } from '../../presentation/protocols'

export class CreatePostController implements Controller {
  constructor (private readonly validation: Validation,
    private readonly createPost: CreatePost) {}

  async handle (request: CreatePostRequest): Promise<HttpResponse> {
    this.validation.validate(request)
    const post = await this.createPost.execute(request)
    return { body: post, statusCode: 200 }
  }
}

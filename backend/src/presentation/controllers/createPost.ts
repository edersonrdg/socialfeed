import { CreatePost } from '../../domain/userCases/CreatePost'
import { CreatePostRequest } from '../../domain/models/Post'
import { Controller, HttpResponse, Validation } from '../../presentation/protocols'

interface getImage extends CreatePostRequest {
  filename: string
}

export class CreatePostController implements Controller {
  constructor (private readonly validation: Validation,
    private readonly createPost: CreatePost) {}

  async handle (request: getImage): Promise<HttpResponse> {
    const { authorId, description, filename } = request
    this.validation.validate({ authorId, description, image: filename })
    const post = await this.createPost.execute({ authorId, description, image: filename })
    return { body: post, statusCode: 200 }
  }
}

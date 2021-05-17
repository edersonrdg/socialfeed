import { BadRequestError } from '../../domain/errors'
import { PostRepository } from '../../data/protocols/db/IPostRepositoty'
import { UserRepository } from '../../data/protocols/db/IUserRepository'
import { CreatePostRequest, CreatePostResponse } from '../../domain/models/Post'
import { CreatePost } from '../../domain/userCases/CreatePost'

export class CreatePostService implements CreatePost {
  constructor (private readonly userRepository: UserRepository,
    private readonly postRepository: PostRepository) {}

  async execute ({ authorId, image, description }: CreatePostRequest): Promise<CreatePostResponse> {
    const user = await this.userRepository.getById(authorId)
    if (!user) throw new BadRequestError('Invalid user id', 401)

    const post = await this.postRepository.create({ authorId, image, description })
    return post
  }
}

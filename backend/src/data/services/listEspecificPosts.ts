import { PostRepository } from '../../data/protocols/db/IPostRepositoty'
import { CreatePostResponse } from '../../domain/models/Post'
import { LIstEspecificPosts } from '../../domain/userCases/ListPosts'

export class ListEspecificPostsService implements LIstEspecificPosts {
  constructor (private readonly postRepository: PostRepository) {}

  async execute (authorId: string): Promise<CreatePostResponse[]> {
    const posts = await this.postRepository.listById(authorId)
    return posts
  }
}

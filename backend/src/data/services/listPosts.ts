import { PostRepository } from '../../data/protocols/db/IPostRepositoty'
import { CreatePostResponse } from '../../domain/models/Post'
import { LIstPosts } from '../../domain/userCases/ListPosts'

export class ListPostsService implements LIstPosts {
  constructor (private readonly postRepository: PostRepository) {}

  async execute (): Promise<CreatePostResponse[]> {
    const posts = await this.postRepository.list()
    return posts
  }
}

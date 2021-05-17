import { BadRequestError } from '../../domain/errors'
import { PostRepository } from '../../data/protocols/db/IPostRepositoty'
import { DeletePostRequest } from '../../domain/models/Post'
import { DeletePost } from '../../domain/userCases/DeletePost'

export class DeletePostService implements DeletePost {
  constructor (private readonly postRepository: PostRepository) {}

  async execute ({ authorId, postId }: DeletePostRequest): Promise<void> {
    const post = await this.postRepository.getById(postId)
    if (!post) throw new BadRequestError('Invalid post id')

    if (post?.authorId !== authorId) throw new BadRequestError('authentication fail, you cannot remove posts that are not yours ', 401)

    await this.postRepository.delete(postId)
  }
}

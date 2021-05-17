import { EntityRepository, getRepository } from 'typeorm'
import { CreatePostDb, CreatePostResponseDb } from '../../../../data/models/Post'
import { PostRepository } from '../../../../data/protocols/db/IPostRepositoty'
import Posts from '../models/Post'

@EntityRepository(Posts)
export class PostRepositoryMysql implements PostRepository {
  async create ({ authorId, image, description }: CreatePostDb): Promise<CreatePostResponseDb> {
    const postRepositoryTypeORM = getRepository(Posts)

    const post = postRepositoryTypeORM.create({
      authorId, image, description
    })

    await postRepositoryTypeORM.save(post)

    return post
  }
}

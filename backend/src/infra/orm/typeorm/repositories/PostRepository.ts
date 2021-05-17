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

  async list (): Promise<CreatePostResponseDb[]> {
    const postRepositoryTypeORM = getRepository(Posts)

    const posts = await postRepositoryTypeORM.find()

    posts.sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
    return posts
  }

  async listById (authorId: string): Promise<CreatePostResponseDb[]> {
    const postRepositoryTypeORM = getRepository(Posts)

    const posts = await postRepositoryTypeORM.find({
      where: { authorId }
    })

    posts.sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
    return posts
  }

  async getById (postId: string): Promise<CreatePostResponseDb | undefined> {
    const postRepositoryTypeORM = getRepository(Posts)

    const post = await postRepositoryTypeORM.findOne({
      where: { id: postId }
    })

    return post
  }

  async delete (postId: string): Promise<void> {
    const postRepositoryTypeORM = getRepository(Posts)

    await postRepositoryTypeORM.delete(postId)
  }
}

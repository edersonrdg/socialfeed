import { CreatePostDb, CreatePostResponseDb } from '../../../data/models/Post'

export interface PostRepository {
  create: (data: CreatePostDb) => Promise<CreatePostResponseDb>

  list: () => Promise<CreatePostResponseDb[]>

  listById: (authorId: string) => Promise<CreatePostResponseDb[]>

  getById: (postId: string) => Promise<CreatePostResponseDb | undefined>

  delete: (postId: string) => Promise<void>
}

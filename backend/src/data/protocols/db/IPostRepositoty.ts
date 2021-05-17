import { CreatePostDb, CreatePostResponseDb } from '../../../data/models/Post'

export interface PostRepository {
  create: (data: CreatePostDb) => Promise<CreatePostResponseDb>
}

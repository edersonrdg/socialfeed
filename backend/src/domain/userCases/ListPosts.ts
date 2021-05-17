import { CreatePostResponse } from '../../domain/models/Post'

export interface LIstPosts {
  execute: () => Promise<CreatePostResponse[]>
}

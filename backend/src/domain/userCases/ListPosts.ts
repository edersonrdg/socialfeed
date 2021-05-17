import { CreatePostResponse } from '../../domain/models/Post'

export interface LIstPosts {
  execute: () => Promise<CreatePostResponse[]>
}

export interface LIstEspecificPosts {
  execute: (authorId: string) => Promise<CreatePostResponse[]>
}

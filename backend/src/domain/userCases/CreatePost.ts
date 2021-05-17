import { CreatePostRequest, CreatePostResponse } from '../../domain/models/Post'

export interface CreatePost {
  execute: (account: CreatePostRequest) => Promise<CreatePostResponse>
}

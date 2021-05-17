export type CreatePostRequest = {
  image: string
  description?: string
  authorId: string
}

export type CreatePostResponse = {
  id: string
  image: string
  description?: string
  authorId: string
  created_at: Date
  updated_at: Date
}

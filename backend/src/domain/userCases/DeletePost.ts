import { DeletePostRequest } from '../models/Post'

export interface DeletePost {
  execute: (account: DeletePostRequest) => Promise<void>
}

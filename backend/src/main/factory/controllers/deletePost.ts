import { PostRepositoryMysql } from '../../../infra/orm/typeorm/repositories/PostRepository'
import { DeletePostService } from '../../../data/services/deletePost'
import { DeletePostController } from '../../../presentation/controllers/deletePost'
import { Controller } from '../../../presentation/protocols'

export const makeDeletePostController = (): Controller => {
  const postRepository = new PostRepositoryMysql()
  const deletePostService = new DeletePostService(postRepository)
  return new DeletePostController(deletePostService)
}

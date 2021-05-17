import { PostRepositoryMysql } from '../../../infra/orm/typeorm/repositories/PostRepository'
import { ListEspecificPostsService } from '../../../data/services/listEspecificPosts'
import { ListEspecificPostsController } from '../../../presentation/controllers/listEspecificPosts'

export const makeListEspecificPostController = () => {
  const postRepository = new PostRepositoryMysql()
  const listEspecificPostService = new ListEspecificPostsService(postRepository)
  return new ListEspecificPostsController(listEspecificPostService)
}

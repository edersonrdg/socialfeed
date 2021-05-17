import { PostRepositoryMysql } from '../../../infra/orm/typeorm/repositories/PostRepository'
import { ListPostsService } from '../../../data/services/listPosts'
import { ListPostsController } from '../../../presentation/controllers/listPosts'

export const makeListPostController = () => {
  const postRepository = new PostRepositoryMysql()
  const listPostService = new ListPostsService(postRepository)
  return new ListPostsController(listPostService)
}

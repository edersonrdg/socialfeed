import { PostRepositoryMysql } from '../../../infra/orm/typeorm/repositories/PostRepository'
import UsersRepositoryMySql from '../../../infra/orm/typeorm/repositories/UsersRepository'
import { CreatePostService } from '../../../data/services/createPost'
import { CreatePostController } from '../../../presentation/controllers/createPost'
import { Controller } from '../../../presentation/protocols'
import { ValidationCreatePost } from '../../../validators'

export const makeCreatePostController = (): Controller => {
  const userRepository = new UsersRepositoryMySql()
  const postRepository = new PostRepositoryMysql()
  const validationCreatePost = new ValidationCreatePost()
  const createPostService = new CreatePostService(userRepository, postRepository)
  return new CreatePostController(validationCreatePost, createPostService)
}

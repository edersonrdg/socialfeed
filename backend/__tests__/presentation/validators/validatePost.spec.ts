import { BadRequestError } from '../../../src/domain/errors'
import { ValidationCreatePost } from '../../../src/validators'

const makeSut = () => {
  return new ValidationCreatePost()
}

describe('Validate createPost', () => {
  it('should return Error if no image is provided', () => {
    const validation = makeSut()
    const request = {}
    try {
      validation.validate(request)
    } catch (error) {
      expect(error).toEqual(new BadRequestError('image is required'))
    }
  })
})

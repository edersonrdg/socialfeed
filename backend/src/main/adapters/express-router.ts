import { Request, Response } from 'express'
import { Controller } from '../../presentation/protocols/controller'

export const adapt = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const data = {
      ...(request.body || {}),
      ...(request.params || {}),
      authorId: request.userId
    }
    const httpResponse = await controller.handle(data)

    return response.status(httpResponse.statusCode).json(httpResponse.body)
  }
}

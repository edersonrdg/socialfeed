import { Request, Response } from 'express'
import { Controller } from '../../presentation/protocols/controller'

export const adapt = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const data = {
      ...(request.body || {}),
      ...(request.params || {})
    }
    const { statusCode, body } = await controller.handle(data)

    return response.json(body).status(statusCode)
  }
}

import { Middleware } from '../../presentation/protocols'

import { Request, Response, NextFunction } from 'express'

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await middleware.handle(req)
    next()
  }
}

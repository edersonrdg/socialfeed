import { NextFunction, Request, Response } from 'express'
import { BadRequestError } from '../../domain/errors'

export function errorTreatment (error: Error, request: Request, response: Response, _: NextFunction) {
  if (error instanceof BadRequestError) {
    const { statusCode, message } = error
    return response.status(statusCode).json({ error: message })
  }
  console.error(error)
  return response.status(500).json({ error: 'Internal server error' })
}

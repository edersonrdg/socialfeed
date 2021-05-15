class BaseHttpError extends Error {
  public readonly message: string

  public readonly statusCode: number
  constructor (message: string, statusCode = 400) {
    super(message)
    this.statusCode = statusCode
  }
}

export class BadRequestError extends BaseHttpError {
  public readonly statusCode: number

  constructor (message: string, statusCode = 400) {
    super(message)
    this.statusCode = statusCode
  }
}

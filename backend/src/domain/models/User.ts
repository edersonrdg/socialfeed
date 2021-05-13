export type CreateUserRequest = {
  email: string
  password: string
  confirmPassword: string
}

export type CreateUserResponse = {
  id: string
  email: string
}

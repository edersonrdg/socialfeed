export type CreateUserRequest = {
  email: string
  password: string
  confirmPassword: string
}

export type LoginUserData = {
  email: string
  password: string
}

export type LoginUserResponse = {
  id: string
  email: string
  password: string
  created_at: Date
  updated_at: Date
  token: string
}

export type CreateUserResponse = {
  id: string
  email: string
}

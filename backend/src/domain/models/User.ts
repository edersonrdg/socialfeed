export type SignUpRequest = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export type SignInRequest = {
  email: string
  password: string
}

export type SignInResponse = {
  id: string
  email: string
  name: string
  created_at: Date
  updated_at: Date
  token: string
}

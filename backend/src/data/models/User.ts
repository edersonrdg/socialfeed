export type CreateUserDb = {
  name: string
  email: string
  password: string
}

export type CreateUserResponseDB = {
  id: string
  email: string
  name: string
  created_at: Date
  updated_at: Date
  password?: string
}

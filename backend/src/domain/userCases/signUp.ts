export type SignUpParams = {
  email: string
  password: string
  confirmPassword: string
}

export type SignUpResult = {
  id: string
  email: string
}

export interface SignUp {
  execute: (account: SignUpParams) => Promise<SignUpResult>
}

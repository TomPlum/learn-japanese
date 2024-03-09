export interface SignUpResponse {
  username: string
  email: string
  nickname?: string
}

export interface RegistrationRequest {
  username: string
  password: string
  email: string
  nickname: string
}
import { UserPreferencesResponse } from "service/UserService.ts";

export interface LoginRequest {
  username: string,
  password: string
}

export interface LoginResponse {
  username: string
  email: string
  nickname?: string
  roles: string[]
  locked: boolean
  expired: boolean
  credentialsExpired: boolean
  creationDate: string
  enabled: boolean
  token: string
  refreshToken: string
  preferences: UserPreferencesResponse
}
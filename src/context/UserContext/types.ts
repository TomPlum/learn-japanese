import { Preference } from "domain/user/Preference.ts";

export interface UserProviderProps {
  initialUser?: User
}

export interface SetPreferenceRequest {
  preference: Preference
  value: any
}

export interface UserContextBag {
  user?: User
  setUser: (user: User) => void
  setPreferences: (preferences: UserPreferences) => void
  setPreference: (preference: SetPreferenceRequest) => void
  setNickName: (name: string) => void
  setAccessToken: (token: string) => void
  setRefreshToken: (token: string) => void
  clearUser: () => void
}

export interface User {
  username: string
  email: string
  nickname?: string
  roles: string[]
  locked: boolean
  expired: boolean
  credentialsExpired: boolean
  enabled: boolean
  creationDate: string
  token: string
  refreshToken: string
  preferences: UserPreferences
}

export interface UserPreferences {
  kanjiFont: string
  theme: string
  language: string
  highScoresBehaviour: string
  defaultMode: string
  flashCardsQuantity: number
  confidenceMenuStyle: string
  profileVisibility: string
  streakCardView: string
  activityFeedQuantity: number
  romajiVisibility: string
  streakNotifications: boolean
  mistakesReminders: boolean
}
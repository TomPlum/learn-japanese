import { LoginResponse } from "api/hooks/auth/useLogin/types.ts";

export const useLoginResponses: LoginResponse = {
  username: "TomPlum42",
  email: "tom@hotmail.com",
  nickname: "Tom",
  roles: ["admin"],
  locked: false,
  expired: false,
  credentialsExpired: false,
  creationDate: "2021-10-15",
  enabled: true,
  token: "TOKEN",
  refreshToken: "REFRESH_TOKEN",
  preferences: {
    kanjiFont: "Gothic",
    theme: "Dark Mode",
    language: "English",
    highScoresBehaviour: "Ask Each Time",
    defaultMode: "Play",
    flashCardsQuantity: 10,
    confidenceMenuStyle: "Numbers 1 - 6",
    activityFeedQuantity: 3,
    mistakesReminders: true,
    profileVisibility: "Public",
    romajiVisibility: "Always Show",
    streakCardView: "Streak",
    streakNotifications: false
  }
}
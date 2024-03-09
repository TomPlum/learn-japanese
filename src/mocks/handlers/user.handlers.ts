import { http, HttpResponse } from "msw";
import { api } from "../util"

export const handlers = [
  http.post(`${api}/user/login`, () => {
    return HttpResponse.json({
      username: "Tester",
      email: "tester.testing@hotmail.co.uk",
      nickname: "Demo",
      roles: ["admin"],
      locked: false,
      expired: false,
      credentialsExpired: false,
      enabled: true,
      creationDate: "2022-10-05",
      token: "{STUBBED_JWT}",
      refreshToken: "{STUBBED_REFRESH_TOKEN}",
      preferences: {
        kanjiFont: "Gothic",
        theme: "Dark",
        language: "English",
        highScoresBehaviour: "Never Submit",
        defaultMode: "Play",
        flashCardsQuantity: 5,
        confidenceMenuStyle: "Numbers",
        profileVisibility: "Public",
        streakCardView: "Start Date",
        romajiVisibility: "Ask Each Time",
        activityFeedQuantity: 3,
        streakNotifications: false,
        mistakesReminders: false
      }
    })
  }),
  http.get(`${api}/user/exists`, () => {
    return HttpResponse.json({
      exists: false
    })
  }),
  http.post(`${api}/user/register`, () => {
    return HttpResponse.json({
      username: "Testing",
      email: "test.test@hotmail.co.uk",
      nickname: "Tester"
    })
  }),
  http.post(`${api}/user/is-authenticated`, () => {
    return HttpResponse.json(true)
  }),
  http.post(`${api}/user/refresh-token`, () => {
    return HttpResponse.json({
      accessToken:
        "eyJhsGciOiJIUzUxMiJ9.eyJzdWIiOiJUb21QbHVtIiwiaWF0IjoxNjY2ODkwMTcwLCJleHAiOjE2NjY5NzY1NzB9.Md3TT5ngY90uBrY3PDmCkVaPSMpW5yTXhg3YNu2sStHc2DgdLvM8yHcNNhDFQTxhRKEHC0RWX5Z-2Ly1c9kIXA",
      refreshToken: "44a679dc-ab3d-4682-aa5f-b638e95856f5"
    })
  }),
  http.post(`${api}/user/set-nickname`, () => {
    return new HttpResponse(null, { status: 201 })
  }),
  http.patch(`${api}/user/update-preferences`, () => {
    return new HttpResponse(null, { status: 204 })
  }),
  http.get(`${api}/user/preferences`, () => {
    return HttpResponse.json({
      kanjiFont: "Gothic",
      theme: "Dark",
      language: "日本語",
      highScoresBehaviour: "Never Submit",
      defaultMode: "Play",
      flashCardsQuantity: 5,
      confidenceMenuStyle: "Numbers",
      profileVisibility: "Public",
      streakCardView: "Start Date",
      romajiVisibility: "Ask Each Time",
      activityFeedQuantity: 3,
      streakNotifications: false,
      mistakesReminders: false
    }, { status: 201 })
  }),
  http.get(`${api}/user/usernames`, () => {
    return HttpResponse.json({
      users: ["TestO", "TomPlum"]
    }, { status: 201 })
  }),
  http.delete(`${api}/user/delete`, () => {
    return new HttpResponse(null, { status: 204 })
  })
]

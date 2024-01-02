import { rest } from "msw"
import { api } from "../util"

export const handlers = [
  rest.post(`${api}/user/login`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
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
    )
  }),
  rest.get(`${api}/user/exists`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        exists: false
      })
    )
  }),
  rest.post(`${api}/user/register`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: "Testing",
        email: "test.test@hotmail.co.uk",
        nickname: "Tester"
      })
    )
  }),
  rest.post(`${api}/user/is-authenticated`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(true))
  }),
  rest.post(`${api}/user/refresh-token`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        accessToken:
          "eyJhsGciOiJIUzUxMiJ9.eyJzdWIiOiJUb21QbHVtIiwiaWF0IjoxNjY2ODkwMTcwLCJleHAiOjE2NjY5NzY1NzB9.Md3TT5ngY90uBrY3PDmCkVaPSMpW5yTXhg3YNu2sStHc2DgdLvM8yHcNNhDFQTxhRKEHC0RWX5Z-2Ly1c9kIXA",
        refreshToken: "44a679dc-ab3d-4682-aa5f-b638e95856f5"
      })
    )
  }),
  rest.post(`${api}/user/set-nickname`, (_req, res, ctx) => {
    return res(ctx.status(201))
  }),
  rest.patch(`${api}/user/update-preferences`, (_req, res, ctx) => {
    return res(ctx.status(204))
  }),
  rest.get(`${api}/user/preferences`, (_req, res, ctx) => {
    return res(
      ctx.status(204),
      ctx.json({
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
      })
    )
  }),
  rest.get(`${api}/user/usernames`, (_req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        users: ["TestO", "TomPlum"]
      })
    )
  }),
  rest.delete(`${api}/user/delete`, (_req, res, ctx) => {
    return res(ctx.status(204))
  })
]

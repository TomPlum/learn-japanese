import { Topic } from "./Topic"
import { User } from "../../src/slices/UserSlice"
import Response = Cypress.Response
import RequestOptions = Cypress.RequestOptions
import Chainable = Cypress.Chainable

Cypress.Commands.add("getByTestId", (id: string) => {
  return cy.get(`[data-testid=${id}]`)
})

Cypress.Commands.add("login", () => {
  cy.request({
    url: Cypress.env("host") + "/user/login",
    body: { username: "Testing", password: "Testing123-" },
    method: "POST"
  }).then((res: Response<User>) => {
    if (res.isOkStatusCode) {
      const user: User = {
        username: res.body.username,
        email: res.body.email,
        nickname: res.body.nickname,
        roles: res.body.roles,
        locked: res.body.locked,
        expired: res.body.expired,
        credentialsExpired: res.body.credentialsExpired,
        enabled: res.body.enabled,
        creationDate: res.body.creationDate,
        token: res.body.token,
        refreshToken: res.body.refreshToken,
        preferences: {
          kanjiFont: res.body.preferences.kanjiFont,
          language: res.body.preferences.language,
          theme: res.body.preferences.theme,
          confidenceMenuStyle: res.body.preferences.confidenceMenuStyle,
          highScoresBehaviour: res.body.preferences.highScoresBehaviour,
          flashCardsQuantity: res.body.preferences.flashCardsQuantity,
          defaultMode: res.body.preferences.defaultMode,
          streakCardView: res.body.preferences.streakCardView,
          profileVisibility: res.body.preferences.profileVisibility,
          activityFeedQuantity: res.body.preferences.activityFeedQuantity,
          romajiVisibility: res.body.preferences.romajiVisibility,
          mistakesReminders: res.body.preferences.mistakesReminders,
          streakNotifications: res.body.preferences.streakNotifications
        }
      }
      localStorage.setItem("user", JSON.stringify(user))
    } else {
      cy.request({
        url: Cypress.env("host") + "/user/register",
        body: {
          email: "test.test@hotmail.co.uk",
          nickname: "Tester",
          password: "Testing123-",
          username: "Testing"
        },
        method: "POST",
        failOnStatusCode: true
      }).then((res) => {
        if (res.isOkStatusCode) {
          cy.login()
        }
      })
    }
  })
})

Cypress.Commands.add("getAuthToken", (func: (token: string) => void) => {
  cy.request({
    url: Cypress.env("host") + "/user/login",
    body: { username: "Testing", password: "Testing123-" },
    method: "POST"
  }).then((res: Response<User>) => {
    func(res.body.token)
  })
})

Cypress.Commands.add("authorisedRequest", (options: Partial<RequestOptions>): Chainable<any> | undefined => {
  cy.getAuthToken((token: string) => {
    options.headers = { Authorization: "Bearer " + token }
    return cy.request(options)
  })
  return undefined
})

Cypress.Commands.add("class", (className) => {
  return cy.get("[class*=" + className + "]")
})

Cypress.Commands.add("getByTitle", (titleName) => {
  return cy.get('[title="' + titleName + '"]')
})

Cypress.Commands.add("selectTopic", (presetName: string, topicName?: Topic) => {
  cy.navigateToMenu()
  if (topicName) cy.class("topicSelectionMenuWrapper").contains(topicName).click()
  cy.class("ModeSelectionMenu_wrapper").contains(presetName).click()
})

Cypress.Commands.add("startGame", (presetName: string, topicName?: Topic) => {
  cy.selectTopic(presetName, topicName)
  cy.contains("Start").click()
})

Cypress.Commands.add("navigateToMenu", () => {
  cy.visit("http://localhost:3001/learn-japanese#/")
  cy.class("buttonContainer").contains("Play").click()
  cy.url().should("include", "/menu/play")
})

Cypress.Commands.add("startAndQuit", (presetName: string, topicName?: Topic) => {
  cy.startGame(presetName, topicName)
  cy.class("QuitButton_icon").click()
  cy.class("ConfirmModal_yes").click()
  cy.contains("Finish").click()
})

Cypress.Commands.add("login", () => {
  cy.request({
    url: Cypress.env("host") + "/user/login",
    body: { username: "Testing", password: "Testing123-" },
    method: "POST"
  }).then((res: Response<User>) => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: res.body.username,
        email: res.body.email,
        nickname: res.body.nickname,
        roles: res.body.roles,
        locked: res.body.locked,
        expired: res.body.expired,
        credentialsExpired: res.body.credentialsExpired,
        enabled: res.body.enabled,
        creationDate: res.body.creationDate,
        token: res.body.token,
        preferences: {
          defaultFont: res.body.preferences.kanjiFont,
          language: res.body.preferences.language,
          theme: res.body.preferences.theme,
          confidenceMenuStyle: res.body.preferences.confidenceMenuStyle,
          highScores: res.body.preferences.highScoresBehaviour,
          cardsPerDay: res.body.preferences.flashCardsQuantity,
          defaultMode: res.body.preferences.defaultMode
        }
      })
    )
  })
})

Cypress.Commands.add("getAuthToken", (func: (token: string) => void) => {
  cy.request({
    url: Cypress.env("host") + "/user/login",
    body: { username: "Testing", password: "Testing123-" },
    method: "POST"
  }).then((res: Response<User>) => {
    func(res.body.token)
  })
})

Cypress.Commands.add("authorisedRequest", (options: Partial<RequestOptions>): Chainable<any> | undefined => {
  cy.getAuthToken((token: string) => {
    options.headers = { Authorization: "Bearer " + token }
    return cy.request(options)
  })
  return undefined
})

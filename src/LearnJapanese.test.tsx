import { screen, render } from "@testing-library/react"
import { createMemoryRouter, RouterProvider } from "react-router-dom"
import { Environment } from "./utility/Environment.ts"
import { routerConfig } from "./LearnJapanese.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const setup = (route = '') => {
  const router = createMemoryRouter(routerConfig, {
    initialEntries: [route],
    initialIndex: 1
  })
  render(
   <QueryClientProvider client={new QueryClient()}>
     <RouterProvider router={router} />
   </QueryClientProvider>
  )
}

beforeEach(() => {
  const mockEnvironment = vi.fn()
  mockEnvironment.mockReturnValueOnce("/example-base-path/")
  mockEnvironment.mockReturnValueOnce("landing page description")
  Environment.variable = mockEnvironment
})

test("Navigating to the root URI should route to the Landing page", async () => {
  setup('/')
  expect(await screen.findByTestId("landing-page")).toBeInTheDocument()
})

test("Navigating to the /home should route to the home page", async () => {
  setup('/home')
  expect(await screen.findByTestId("home-page")).toBeInTheDocument()
})

test("Navigating to the /play should route to the play page", async () => {
  setup('/play')
  expect(await screen.findByTestId("play-page")).toBeInTheDocument()
})

test("Navigating to the /learn should route to the learn page", async () => {
  setup('/learn')
  expect(await screen.findByTestId("learn-page")).toBeInTheDocument()
})

test("Navigating to the /learn/kanji should route to the online learning page", async () => {
  setup('/learn/kanji')
  expect(await screen.findByTestId("learn-online-page")).toBeInTheDocument()
})

test("Navigating to the /search should route to the Search page", async () => {
  setup('/search')
  expect(await screen.findByTestId("search-page")).toBeInTheDocument()
})

test("Navigating to the /help should route to the Help page", async () => {
  setup('/help')
  expect(await screen.findByTestId("help-page")).toBeInTheDocument()
})

test("Navigating to the /high-scores should route to the high scores page", async () => {
  // TODO: Add Highscore MSW handlers here once relevant hooks converted
  setup('/high-scores')
  expect(await screen.findByTestId("high-scores-page")).toBeInTheDocument()
})

test("Navigating to the /genki uri should route to the genki index page", async () => {
  setup('/genki')
  expect(await screen.findByTestId("genki-index-page")).toBeInTheDocument()
})

test("Navigating to the /genki uri should route to the genki index page", async () => {
  setup('/genki')
  expect(await screen.findByTestId("genki-index-page")).toBeInTheDocument()
})

test("Navigating to the /genki/grammar uri should route to the genki grammar page", async () => {
  setup('/genki/grammar')
  expect(await screen.findByTestId("genki-grammar-page")).toBeInTheDocument()
})

test("Navigating to the /kanji uri should route to the kanji bank page", async () => {
  setup('/kanji')
  expect(await screen.findByTestId("kanji-bank-page")).toBeInTheDocument()
})

test("Navigating to the /register uri should route to the registration page", async () => {
  setup('/register')
  expect(await screen.findByTestId("registration-page")).toBeInTheDocument()
})

test("Navigating to the /login uri should route to the login page", async () => {
  setup('/login')
  expect(await screen.findByTestId("login-page")).toBeInTheDocument()
})

test("Navigating to an unknown URI should route to the Not Found page", async () => {
  setup('/unknown')
  expect(await screen.findByTestId("not-found-page")).toBeInTheDocument()
})

import { screen } from "@testing-library/react"
import { createBrowserHistory } from "history"
import { MemoryRouter, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { History } from "@remix-run/router";
import renderTranslatedReduxConsumer from "tests/renderTranslatedReduxConsumer.tsx"
import Main from "./components/layout/Main";
import { Environment } from "./utility/Environment.ts";
import LearnJapanese from "./LearnJapanese.tsx";
import { store } from "./store.ts";

// Mock scrollIntoView() as it doesn't exist in JSDom
const scrollIntoView = vi.fn()
window.HTMLElement.prototype.scrollIntoView = scrollIntoView

const history = createBrowserHistory() as never as History

const setup = () => {
  renderTranslatedReduxConsumer(
    <HistoryRouter history={history}>
      <Main />
    </HistoryRouter>
  )
}

beforeEach(() => {
  const mockEnvironment = vi.fn()
  mockEnvironment.mockReturnValueOnce("/example-base-path/")
  mockEnvironment.mockReturnValueOnce("landing page description")
  Environment.variable = mockEnvironment
})

test("Navigating to the root URI should route to the Landing page", async () => {
  window.history.pushState({}, 'Landing Page', import.meta.env.VITE_BASE_PATH)
  renderTranslatedReduxConsumer(
    <LearnJapanese store={store} />
  )
  expect(await screen.findByTestId("landing-page")).toBeInTheDocument()
})

test("Navigating to the /home should route to the home page", async () => {
  history.push("/example-base-path/home")
  setup()
  expect(await screen.findByTestId("home-page")).toBeInTheDocument()
})

test("Navigating to the /search should route to the Search page", async () => {
  history.push("/example-base-path/search")
  setup()
  expect(await screen.findByTestId("search-page")).toBeInTheDocument()
})

test("Navigating to the /help should route to the Help page", async () => {
  history.push("/example-base-path/help")
  setup()
  expect(await screen.findByText("Frequently Asked Questions")).toBeInTheDocument()
})

test("Navigating to an unknown URI should route to the Not Found page", async () => {
  history.push("/example-base-path/nope")
  setup()
  expect(await screen.findByText("Nani!?")).toBeInTheDocument()
})

import Arrays from "../../../utility/Arrays"
import { fireEvent, screen } from "@testing-library/react"
import LandingPage  from "./LandingPage"
import { Kana } from "../../../domain/kana/Kana"
import KanaType from "../../../domain/kana/KanaType"
import { KanaColumn } from "../../../domain/kana/KanaColumn"
import { Environment } from "../../../utility/Environment"
import matchMediaPolyfill from "mq-polyfill"
import { getByTextWithMarkup } from "tests/Queries"
import { when } from "jest-when"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import renderWithTranslation from "tests/renderWithTranslation"

const environment = vi.fn()
const shuffle = vi.fn()
const getRandomObject = vi.fn()
const mockKanaRepository = vi.fn()
vi.mock("../../../repository/KanaRepository", () => ({
  default: function () {
    return { read: mockKanaRepository }
  }
}))

const history = createMemoryHistory()

const setup = () => {
  const component = renderWithTranslation(
    <Router history={history}>
      <LandingPage />
    </Router>
  )

  return {
    play: screen.getByText("Play"),
    learn: screen.getByText("Learn"),
    search: screen.getByText("Search"),
    help: screen.getByText("Help"),
    japaneseInspectable: screen.getByTestId("japanese-inspectable"),
    hiraganaInspectable: screen.getByTestId("hiragana-inspectable"),
    katakanaInspectable: screen.getByTestId("katakana-inspectable"),
    ...component
  }
}

beforeEach(() => {
  // Mock environment variables
  Environment.variable = environment

  // Mock timers
  vi.useFakeTimers({ shouldAdvanceTime: true })

  // Mock window size
  matchMediaPolyfill(window)
  window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height
    }).dispatchEvent(new this.Event("resize"))
  }

  // Mock carousel shuffle
  Arrays.shuffle = shuffle
  shuffle.mockImplementation((array: any[]) => {
    return array
  })

  // Always returns the first element so it is deterministic
  Arrays.getRandomObject = getRandomObject
  getRandomObject.mockImplementation((array: any[]) => {
    const objects = [...array]
    const first = objects[0]
    objects.splice(0, 1)
    return [first, objects]
  })

  // Mock Kana Repository Response
  mockKanaRepository.mockResolvedValueOnce([new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)])
})

afterEach(() => {
  vi.runOnlyPendingTimers()
  vi.useRealTimers()
  vi.restoreAllMocks()
})

test("Should render the leading heading", async () => {
  setup()
  expect(await screen.findByText("あ")).toBeInTheDocument()
  expect(screen.getByText("Japanese")).toBeInTheDocument()
})

test("Should render the description", async () => {
  environment.mockReturnValueOnce("hiragana desc")
  environment.mockReturnValueOnce("katakana desc")
  setup()
  expect(await screen.findByText("あ")).toBeInTheDocument()

  expect(environment).toHaveBeenCalledWith("HIRAGANA_DESC")
  expect(environment).toHaveBeenCalledWith("KATAKANA_DESC")

  const description = "A simple memory training app for learning the Japanese Hiragana and Katakana syllabaries."
  expect(getByTextWithMarkup(description)).toBeInTheDocument()
})

test("Should render the play button", async () => {
  const { play } = setup()
  expect(await screen.findByText("あ")).toBeInTheDocument()
  expect(play).toBeInTheDocument()
})

test("Should render the learn button", async () => {
  const { learn } = setup()
  expect(await screen.findByText("あ")).toBeInTheDocument()
  expect(learn).toBeInTheDocument()
})

test("Should render the search button", async () => {
  const { search } = setup()
  expect(await screen.findByText("あ")).toBeInTheDocument()
  expect(search).toBeInTheDocument()
})

test("Should render the help button", async () => {
  const { help } = setup()
  expect(await screen.findByText("あ")).toBeInTheDocument()
  expect(help).toBeInTheDocument()
})

test("Should render the kana carousel", async () => {
  getRandomObject.mockReturnValueOnce([new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false), []]) //Parallax BG
  getRandomObject.mockReturnValueOnce([new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false), []]) //Carousel
  setup()
  expect(await screen.findByText("あ")).toBeInTheDocument()
})

test("Clicking the play button should route the user to /home", async () => {
  const { play } = setup()
  expect(await screen.findByText("あ")).toBeInTheDocument()
  fireEvent.click(play)
  expect(history.location.pathname).toBe("/home")
})

test("Clicking the learn button should route the user to /home", async () => {
  const { learn } = setup()
  expect(await screen.findByText("あ")).toBeInTheDocument()
  fireEvent.click(learn)
  expect(history.location.pathname).toBe("/home")
})

test("Clicking the search button should route the user to /search", async () => {
  const { search } = setup()
  expect(await screen.findByText("あ")).toBeInTheDocument()
  fireEvent.click(search)
  expect(history.location.pathname).toBe("/search")
})

test("Clicking the help button should route the user to /search", async () => {
  const { help } = setup()
  expect(await screen.findByText("あ")).toBeInTheDocument()
  fireEvent.click(help)
  expect(history.location.pathname).toBe("/help")
})

test("Hovering over the 'Japanese' inspectable text in the heading should render an info overlay", async () => {
  when(environment).calledWith("JAPANESE_KANJI_DESC").mockReturnValue("Japanese Kanji Description")
  const { japaneseInspectable } = setup()

  fireEvent.mouseOver(japaneseInspectable)

  expect(await screen.findByText("Nihongo (日本語)"))
  expect(await screen.findByText("Japanese Kanji Description"))
})

test("Hovering over the 'Hiragana' inspectable text in the description should render an info overlay", async () => {
  when(environment).calledWith("HIRAGANA_DESC").mockReturnValue("Hiragana Description")
  const { hiraganaInspectable } = setup()

  fireEvent.mouseOver(hiraganaInspectable)

  expect(await screen.findByText("Hiragana (ひらがな)"))
  expect(await screen.findByText("Hiragana Description"))
})

test("Hovering over the 'Katakana' inspectable text in the description should render an info overlay", async () => {
  when(environment).calledWith("KATAKANA_DESC").mockReturnValue("Katakana Description")
  const { katakanaInspectable } = setup()

  fireEvent.mouseOver(katakanaInspectable)

  expect(await screen.findByText("Katakana (カタカナ)"))
  expect(await screen.findByText("Katakana Description"))
})

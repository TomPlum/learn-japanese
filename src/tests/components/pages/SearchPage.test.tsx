import { act, fireEvent, render, screen } from "@testing-library/react"
import SearchPage from "../../../components/pages/SearchPage"

const setup = () => {
  const component = render(<SearchPage />)
  return {
    search: component.getByPlaceholderText("Enter the rōmaji"),
    hiragana: component.getByTestId("hiragana-switch"),
    katakana: component.getByTestId("katakana-switch"),
    diagraphs: component.getByTestId("diagraphs-switch"),
    diacriticals: component.getByTestId("diacriticals-switch"),
    ...component
  }
}

test("On mount should render all Kana", async () => {
  setup()
  expect(await screen.findByText("214 Results")).toBeInTheDocument()
})

test("Toggling the Hiragana button off should hide all Hiragana Kana from the screen", async () => {
  const { hiragana } = setup()
  expect(await screen.findByText("214 Results")).toBeInTheDocument()
  fireEvent.click(hiragana)
  expect(await screen.findByText("107 Results", {}, { timeout: 5000 })).toBeInTheDocument()
})

test("Toggling the Katakana button off should hide all Katakana Kana from the screen", async () => {
  const { katakana } = setup()
  expect(await screen.findByText("214 Results")).toBeInTheDocument()
  fireEvent.click(katakana)
  expect(await screen.findByText("107 Results")).toBeInTheDocument()
})

test("Toggling the Diagraphs button off should hide all diagraphs from the screen", async () => {
  const { diagraphs } = setup()
  expect(await screen.findByText("214 Results")).toBeInTheDocument()
  fireEvent.click(diagraphs)
  expect(await screen.findByText("142 Results")).toBeInTheDocument()
})

test("Toggling the Diacriticals button off should hide all diacritical Kana from the screen", async () => {
  const { diacriticals } = setup()
  expect(await screen.findByText("214 Results")).toBeInTheDocument()
  fireEvent.click(diacriticals)
  expect(await screen.findByText("134 Results")).toBeInTheDocument()
})

test("Searching should reduce the kana to match the term", async () => {
  const { search } = setup()
  expect(await screen.findByText("214 Results")).toBeInTheDocument()
  fireEvent.change(search, { target: { value: "a" } })
  expect(await screen.findByText("54 Results")).toBeInTheDocument()
})

test("Searching and toggling a filter should combine to further reduce the results", async () => {
  const { search, hiragana } = setup()
  expect(await screen.findByText("214 Results")).toBeInTheDocument()
  fireEvent.change(search, { target: { value: "a" } })
  fireEvent.click(hiragana)
  expect(await screen.findByText("27 Results")).toBeInTheDocument()
})

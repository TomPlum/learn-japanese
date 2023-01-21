import { render, screen } from "@testing-library/react"
import GenkiGrammarPage from "../../../components/pages/GenkiGrammarPage"

const setup = () => {
  const component = render(<GenkiGrammarPage />)
  return {
    ...component
  }
}

test("Should render all chapters and section by default", () => {
  setup()

  expect(screen.getByTestId("genki-chapter-1-1")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-1-2")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-1-3")).toBeInTheDocument()

  expect(screen.getByTestId("genki-chapter-2-1")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-2-2")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-2-3")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-2-4")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-2-5")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-2-6")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-2-7")).toBeInTheDocument()

  expect(screen.getByTestId("genki-chapter-3-1")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-3-2")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-3-3")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-3-4")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-3-5")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-3-6")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-3-7")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-3-8")).toBeInTheDocument()

  expect(screen.getByTestId("genki-chapter-4-1")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-4-2")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-4-3")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-4-4")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-4-5")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-4-6")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-4-7")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-4-8")).toBeInTheDocument()

  expect(screen.getByTestId("genki-chapter-5-1")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-5-2")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-5-3")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-5-4")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-5-5")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-5-6")).toBeInTheDocument()

  expect(screen.getByTestId("genki-chapter-6-1")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-6-2")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-6-3")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-6-4")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-6-5")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-6-6")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-6-7")).toBeInTheDocument()

  expect(screen.getByTestId("genki-chapter-13-1")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-13-2")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-13-3")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-13-4")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-13-5")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-13-6")).toBeInTheDocument()

  expect(screen.getByTestId("genki-chapter-14-1")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-14-2")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-14-3")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-14-4")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-14-5")).toBeInTheDocument()

  expect(screen.getByTestId("genki-chapter-15-1")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-15-2")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-15-3")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-15-4")).toBeInTheDocument()

  expect(screen.getByTestId("genki-chapter-16-1")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-16-2")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-16-3")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-16-4")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-16-5")).toBeInTheDocument()

  expect(screen.getByTestId("genki-chapter-17-1")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-17-2")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-17-3")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-17-4")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-17-5")).toBeInTheDocument()
  expect(screen.getByTestId("genki-chapter-17-6")).toBeInTheDocument()
})

import { render, screen } from "@testing-library/react"
import FeedbackCard  from "./FeedbackCard"

test("Should render GitHub button", () => {
  render(<FeedbackCard />)
  expect(screen.getByTitle("Source Repo")).toBeInTheDocument()
})

test("Should render Feedback button", () => {
  render(<FeedbackCard />)
  expect(screen.getByTitle("Feedback")).toBeInTheDocument()
})

test("Should render Donations button", () => {
  render(<FeedbackCard />)
  expect(screen.getByTitle("Buy me a coffee")).toBeInTheDocument()
})

import { act, render } from "@testing-library/react"
import LoadingScreen from "../../../components/layout/LoadingScreen"
import Arrays from "../../../utility/Arrays"
import { findByTextWithElements } from "../../Queries"

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true })
  Arrays.getRandomObject = vi.fn().mockImplementation(() => {
    return ["test loading message", []]
  })
})

test("Should render the lantern animation when the loading screen is active", () => {
  const component = render(<LoadingScreen active={true} />)
  expect(component.getByTestId("lantern-animation")).toBeInTheDocument()
})

test("Should display a random loading message if the loading screen is active", () => {
  const component = render(<LoadingScreen active={true} />)
  expect(component.getByText("test loading message")).toBeInTheDocument()
})

test('Should display a "loading too slowly" message after 15 seconds when the loading screen is active', async () => {
  render(<LoadingScreen active={true} />)
  act(() => {
    vi.advanceTimersByTime(15000)
  })
  expect(
    await findByTextWithElements(
      "Something is taking a long time to load. You may keep waiting or click here to go back."
    )
  ).toBeInTheDocument()
})

test("Should render nothing if the loading screen is in-active", () => {
  const component = render(<LoadingScreen active={false} />)
  expect(component.queryByTestId("lantern-animation")).not.toBeInTheDocument()
})

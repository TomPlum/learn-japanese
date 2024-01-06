import { fireEvent, screen } from "@testing-library/react"
import TopicSelectionMenu  from "./TopicSelectionMenu"
import Topic from "../../../../domain/Topic"
import { store } from "../../../../store"
import { setApplicationMode } from "../../../../slices/ModeSlice"
import { AppMode } from "../../../../domain/AppMode"
import renderReduxConsumer from "__test-utils__/renderReduxConsumer"

const onSelectHandler = vi.fn()

beforeEach(() => {
  store.dispatch(setApplicationMode(AppMode.PLAY))
})

//TODO: It says the dropdown is not visible but it is not...
test.skip("Should render the list group when the viewport is sm or greater", () => {
  const component = renderReduxConsumer(<TopicSelectionMenu onSelect={onSelectHandler} />)
  expect(component.getByTestId("list-group-header")).toBeVisible()
  expect(component.getByTestId("list-group")).toBeVisible()
  expect(component.getByTestId("dropdown")).not.toBeVisible()
})

test("Selecting an option should call the onSelect handler", () => {
  const component = renderReduxConsumer(<TopicSelectionMenu onSelect={onSelectHandler} />)
  fireEvent.click(component.queryAllByText("Hiragana & Katakana")[1])
  expect(onSelectHandler).toHaveBeenCalledWith(Topic.KANA)
})

test("Clicking a heading should not call the onSelect event handler", () => {
  const component = renderReduxConsumer(<TopicSelectionMenu onSelect={onSelectHandler} />)
  fireEvent.click(component.getByText("Select Game Mode"))
  expect(onSelectHandler).not.toHaveBeenCalled()
})

test("Passing the App Mode as 'Play' should render the 'Select Game Mode' heading", () => {
  renderReduxConsumer(<TopicSelectionMenu onSelect={onSelectHandler} />)
  expect(screen.getByText("Select Game Mode")).toBeInTheDocument()
})

test("Passing the App Mode as 'Learn' should render the 'Select Topic' heading", () => {
  store.dispatch(setApplicationMode(AppMode.LEARN))
  renderReduxConsumer(<TopicSelectionMenu onSelect={onSelectHandler} />)
  expect(screen.getByText("Select Topic")).toBeInTheDocument()
})

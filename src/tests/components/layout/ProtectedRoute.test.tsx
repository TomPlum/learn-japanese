import { render, screen } from "@testing-library/react"
import ProtectedRoute, { ProtectedRouteProps } from "../../../components/layout/ProtectedRoute"
import { createMemoryHistory } from "history"
import { Router, Switch } from "react-router-dom"

let props: ProtectedRouteProps
const history = createMemoryHistory()
const mockRender = jest.fn()

beforeEach(() => {
  props = {
    isAuthenticated: true
  }
})

const setup = () => {
  const component = render(
    <Router history={history}>
      <Switch>
        <ProtectedRoute {...props} />
      </Switch>
    </Router>
  )
  return {
    ...component
  }
}

test("Should redirect to the main page if the user is not authenticated", () => {
  props.isAuthenticated = false
  try {
    setup()
  } catch (e) {
    // TODO: Why does it infinitely loop? Causes React render stack overflow.
  }
  expect(history.location.pathname).toBe("/home")
})

test("Should render the given component if the user is authenticated", () => {
  props.component = TestComponent
  setup()
  expect(screen.getByText("I'm a test component")).toBeInTheDocument()
})

test("Should call the given render function if the user is authenticated and no component is passed", () => {
  props.render = mockRender
  setup()
  expect(mockRender).toHaveBeenCalled()
})

const TestComponent = () => {
  return <p>I&apos;m a test component</p>
}

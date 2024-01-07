import { screen, render } from "@testing-library/react"
import ProtectedRoute from "./ProtectedRoute"
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { store } from "../../../store.ts"
import { clearUser, setUser } from "../../../slices/UserSlice.ts";
import { testUser } from "../../../setupTests.ts"
import { Provider } from "react-redux";

test("Should redirect to the main page if the user is not authenticated", () => {
  store.dispatch(clearUser())

  const router = createMemoryRouter([
    {
      path: "/",
      element: <ProtectedRoute />
    },
    {
      path: "/home",
      element: <div data-testid="home" />
    }
  ], { initialEntries: ['/'] })

  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )

  expect(screen.getByTestId('home')).toBeInTheDocument()
})

test("Should render the router outlet component if the user is authenticated", () => {
  store.dispatch(setUser(testUser))

  const router = createMemoryRouter([
    {
      path: "/",
      element: <p>I&apos;m a test component</p>
    },
    {
      path: "/home",
      element: <div data-testid="home" />
    }
  ])
  
  render(<RouterProvider router={router} />)

  expect(window.location.pathname).toBe("/")
  expect(screen.getByText("I'm a test component")).toBeInTheDocument()
})

import { screen } from "@testing-library/react"
import ProtectedRoute from "./ProtectedRoute"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import renderTranslatedReduxConsumer from "tests/renderTranslatedReduxConsumer.tsx"
import { store } from "../../../store.ts"
import { clearUser, setUser } from "../../../slices/UserSlice.ts";
import { testUser } from "../../../setupTests.ts"

test("Should redirect to the main page if the user is not authenticated", () => {
  store.dispatch(clearUser())
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute />
    },
    {
      path: "/home",
      element: <div data-testid="home" />
    }
  ])

  renderTranslatedReduxConsumer(<RouterProvider router={router} />)

  expect(window.location.pathname).toBe("/home")
})

test("Should render the router outlet component if the user is authenticated", () => {
  store.dispatch(setUser(testUser))
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <p>I&apos;m a test component</p>
    },
    {
      path: "/home",
      element: <div data-testid="home" />
    }
  ])
  
  renderTranslatedReduxConsumer(<RouterProvider router={router} />)

  expect(window.location.pathname).toBe("/")
  expect(screen.getByText("I'm a test component")).toBeInTheDocument()
})

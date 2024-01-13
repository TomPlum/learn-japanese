import { screen, render } from "@testing-library/react"
import ProtectedRoute from "./ProtectedRoute"
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { localStorageMock, testUser } from "../../../setupTests.ts";

test("Should redirect to the main page if the user is not authenticated", () => {
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
    <RouterProvider router={router} />
  )

  expect(screen.getByTestId('home')).toBeInTheDocument()
})

test("Should render the router outlet component if the user is authenticated", () => {
  localStorageMock.setItem("user", JSON.stringify(testUser))

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

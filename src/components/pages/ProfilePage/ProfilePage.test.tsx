import ProfilePage  from "./ProfilePage"
import { testUser } from "../../../setupTests"
import { render } from "__test-utils__";
import { User } from "context/UserContext";

const setup = (user?: User) => {
  const { component }  = render(<ProfilePage />, { user })

  return {
    edit: component.queryByTitle("Edit"),
    ...component
  }
}

test('Given a valid user in context, it should render the "About" card', async () => {
  const component = setup(testUser)
  expect(await component.findByText("About")).toBeInTheDocument()
})

test('Given a valid user in context, it should render the "Overview" card', async () => {
  const component = setup(testUser)
  expect(await component.findByText("Overview")).toBeInTheDocument()
})

test('Given a valid user in context, it should render the "Preferences" card', async () => {
  const component = setup(testUser)
  expect(await component.findByText("Preferences")).toBeInTheDocument()
})

test('Given a valid user in context, it should render the "Ranks" card', async () => {
  const component = setup(testUser)
  expect(await component.findByText("Ranks")).toBeInTheDocument()
})

test('Given a valid user in context, it should render the "Stats" card', async () => {
  const component = setup(testUser)
  expect(await component.findByText("Stats")).toBeInTheDocument()
})

test('Given a valid user in context, it should render the "Danger Zone" card', async () => {
  const component = setup(testUser)
  expect(await component.findByText("Danger Zone")).toBeInTheDocument()
})

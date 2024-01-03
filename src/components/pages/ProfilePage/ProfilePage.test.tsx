import ProfilePage  from "./ProfilePage"
import { clearUser, setUser } from "../../../slices/UserSlice"
import { store } from "../../../store"
import { testUser } from "../../../setupTests"
import renderTranslatedReduxConsumer from "tests/renderTranslatedReduxConsumer";

const setup = () => {
  const component = renderTranslatedReduxConsumer(<ProfilePage />)

  return {
    edit: component.queryByTitle("Edit"),
    ...component
  }
}

afterEach(() => {
  store.dispatch(clearUser())
})

test('Given a valid user in context, it should render the "About" card', async () => {
  store.dispatch(setUser(testUser))
  const component = setup()
  expect(await component.findByText("About")).toBeInTheDocument()
})

test('Given a valid user in context, it should render the "Overview" card', async () => {
  store.dispatch(setUser(testUser))
  const component = setup()
  expect(await component.findByText("Overview")).toBeInTheDocument()
})

test('Given a valid user in context, it should render the "Preferences" card', async () => {
  store.dispatch(setUser(testUser))
  const component = setup()
  expect(await component.findByText("Preferences")).toBeInTheDocument()
})

test('Given a valid user in context, it should render the "Ranks" card', async () => {
  store.dispatch(setUser(testUser))
  const component = setup()
  expect(await component.findByText("Ranks")).toBeInTheDocument()
})

test('Given a valid user in context, it should render the "Stats" card', async () => {
  store.dispatch(setUser(testUser))
  const component = setup()
  expect(await component.findByText("Stats")).toBeInTheDocument()
})

test('Given a valid user in context, it should render the "Danger Zone" card', async () => {
  store.dispatch(setUser(testUser))
  const component = setup()
  expect(await component.findByText("Danger Zone")).toBeInTheDocument()
})

import { fireEvent, render } from "@testing-library/react"
import DashboardCardHeader from "../../../../components/layout/card/DashboardCardHeader"
import { faApple } from "@fortawesome/free-brands-svg-icons"
import DashboardCardLink from "../../../../components/layout/card/DashboardCardLink"

const onReloadHandler = jest.fn()

test("Should render the children", () => {
  const component = render(
    <DashboardCardHeader>
      <span>Example Content</span>
    </DashboardCardHeader>
  )
  expect(component.getByText("Example Content")).toBeInTheDocument()
})

test("Should render a title sub-component", () => {
  const component = render(
    <DashboardCardHeader>
      <DashboardCardHeader.Title>Example Title</DashboardCardHeader.Title>
    </DashboardCardHeader>
  )
  expect(component.getByText("Example Title")).toBeInTheDocument()
})

test("Should render an icon sub-component", () => {
  const component = render(
    <DashboardCardHeader>
      <DashboardCardHeader.Icon icon={faApple} title="Apple" />
    </DashboardCardHeader>
  )
  expect(component.getByTitle("Apple")).toBeInTheDocument()
})

test("Should render a menu sub-component with the settings class", () => {
  const component = render(
    <DashboardCardHeader>
      <DashboardCardHeader.SettingsMenu>
        <DashboardCardLink text="Entry" icon={faApple} />
      </DashboardCardHeader.SettingsMenu>
    </DashboardCardHeader>
  )
  const menuButton = component.getByTestId("dashboard-settings-menu")
  expect(menuButton).toBeInTheDocument()
  expect(menuButton).toHaveClass("settings")
})

test("Should render nothing if an invalid react element is passed as a child", () => {
  const component = render(<DashboardCardHeader>{"Test"}</DashboardCardHeader>)
  expect(component.queryByText("Test")).not.toBeInTheDocument()
})

test("Should render the reload icon if a truthy error is passed", () => {
  const component = render(<DashboardCardHeader error="Something went wrong." />)
  expect(component.getByTitle("Retry")).toBeInTheDocument()
})

test("Should NOT render the settings menu if a truthy error is passed", () => {
  const component = render(
    <DashboardCardHeader error="Something went wrong.">
      <DashboardCardHeader.SettingsMenu>
        <DashboardCardLink text="Entry" icon={faApple} />
      </DashboardCardHeader.SettingsMenu>
    </DashboardCardHeader>
  )
  expect(component.queryByTestId("dashboard-settings-menu-button")).not.toBeInTheDocument()
})

test("Should not render the reload icon if a falsy error is passed", () => {
  const component = render(<DashboardCardHeader error="" />)
  expect(component.queryByTitle("Retry")).not.toBeInTheDocument()
})

test("Clicking the reload icon should call the onReload event handler", () => {
  const component = render(<DashboardCardHeader error="Something went wrong." onReload={onReloadHandler} />)
  fireEvent.click(component.getByTitle("Retry"))
  expect(onReloadHandler).toHaveBeenCalled()
})

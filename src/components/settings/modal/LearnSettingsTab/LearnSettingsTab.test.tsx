import LearnSettingsTab  from "./LearnSettingsTab"
import { fireEvent, screen } from "@testing-library/react"
import renderTranslatedReduxConsumer from "__test-utils__/renderTranslatedReduxConsumer"

test("Should render the flash cards quantity dropdown", async () => {
  const component = renderTranslatedReduxConsumer(<LearnSettingsTab />)

  fireEvent.click(component.getByTestId("learn-settings-cards-selector"))

  // Should render the correct options
  expect(await screen.findByText("10"))
  expect(await screen.findByText("20"))
  expect(await screen.findByText("30"))
  expect(await screen.findByText("40"))
  expect(await screen.findByText("50"))
})

test("Should render the romaji settings dropdown", async () => {
  const component = renderTranslatedReduxConsumer(<LearnSettingsTab />)

  fireEvent.click(component.getByTestId("learn-settings-romaji-selector"))

  // Should render the correct options
  expect(await screen.findByText("Always Hide"))
  expect(await screen.findByText("Always Show"))
  expect(await screen.findByText("Ask Each Time"))
})

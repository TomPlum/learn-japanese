import { fireEvent, render } from "@testing-library/react"
import QuestionSettingsStep  from "./QuestionSettingsStep"
import QuestionSettings from "../../../../../domain/session/settings/game/QuestionSettings"
import QuestionType from "../../../../../domain/game/QuestionType"
import { getValueLastCalledWith } from "__test-utils__/Queries"
import renderWithTranslation from "__test-utils__/renderWithTranslation"

const onSelectHandler = vi.fn()

test("Should render the question settings form", () => {
  const component = render(<QuestionSettingsStep onSelect={onSelectHandler} />)
  expect(component.getByTestId("question-settings-form")).toBeInTheDocument()
})

test("Changing a value in the form should call the onSelect event handler with the settings", () => {
  const component = renderWithTranslation(<QuestionSettingsStep onSelect={onSelectHandler} />)

  fireEvent.click(component.getByText("Multiple Choice"))

  expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).type).toBe(QuestionType.CHOICE)
  expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).cards).toBe(4)
})

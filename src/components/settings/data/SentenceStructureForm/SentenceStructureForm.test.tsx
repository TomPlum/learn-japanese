import { fireEvent } from "@testing-library/react"
import SentenceStructureForm  from "./SentenceStructureForm"
import { DataSettingsMenuProps } from "../../../../components/settings/data/DataSettingsMenu"
import SentenceStructureSettings, {
  SentenceStructureSettingsBuilder
} from "../../../../domain/session/settings/data/SentenceStructureSettings"
import { faSpellCheck } from "@fortawesome/free-solid-svg-icons"
import { getValueLastCalledWith } from "__test-utils__/Queries"
import renderWithTranslation from "__test-utils__/renderWithTranslation"

let props: DataSettingsMenuProps<SentenceStructureSettings>

const onResetHandler = vi.fn()
const onQuitHandler = vi.fn()
const onConfirmHandler = vi.fn()

beforeEach(() => {
  props = {
    title: "Sentence Structure",
    icon: faSpellCheck,
    isValid: () => true,
    onReset: onResetHandler,
    onQuit: onQuitHandler,
    onConfirm: onConfirmHandler
  }
})

const setup = () => {
  const component = renderWithTranslation(<SentenceStructureForm {...props} />)
  return {
    quantity: component.getByPlaceholderText("Quantity"),
    adverbs: component.getByTestId("adverb-switch"),
    particles: component.getByTestId("particles-switch"),
    expressions: component.getByTestId("expressions-switch"),
    verbs: component.getByTestId("verbs-switch"),
    nouns: component.getByTestId("nouns-switch"),
    adjectives: component.getByTestId("adjectives-switch"),
    back: component.getByText("Back"),
    reset: component.getByText("Reset"),
    confirm: component.getByText("Confirm"),
    ...component
  }
}

test("Clicking the back button should call the onBack event handler", () => {
  const { back } = setup()
  fireEvent.click(back)
  expect(onQuitHandler).toHaveBeenCalled()
})

test("Clicking reset should turn everything on, set the quantity to 25 and call the onReset event handler", () => {
  const { quantity, adverbs, particles, expressions, verbs, nouns, reset, confirm } = setup()

  //Change the defaults (Can't turn all off as that's invalid)
  fireEvent.change(quantity, { target: { value: 10 } })
  fireEvent.click(adverbs)
  fireEvent.click(particles)
  fireEvent.click(expressions)
  fireEvent.click(verbs)
  fireEvent.click(nouns)

  //Confirm to verify the form values are not default
  fireEvent.click(confirm)
  expect(onConfirmHandler).toHaveBeenCalledWith(
    new SentenceStructureSettingsBuilder()
      .withAdverbs(false)
      .withParticles(false)
      .withExpressions(false)
      .withVerbs(false)
      .withNouns(false)
      .withAdjectives()
      .withQuantity(10)
      .build()
  )

  //Click Reset
  fireEvent.click(reset)

  //Confirm to very the form values have been reset to default
  fireEvent.click(confirm)
  expect(onConfirmHandler).toHaveBeenCalledWith(
    new SentenceStructureSettingsBuilder()
      .withAdverbs()
      .withParticles()
      .withExpressions()
      .withVerbs()
      .withNouns()
      .withAdjectives()
      .withQuantity(25)
      .build()
  )
})

test("Clicking the adverbs switch should exclude them in the data settings", () => {
  const { adverbs, confirm } = setup()
  fireEvent.click(adverbs)
  fireEvent.click(confirm)
  expect(getValueLastCalledWith<SentenceStructureSettings>(onConfirmHandler).adverbs).toBe(false)
})

test("Clicking the particles switch should exclude them in the data settings", () => {
  const { particles, confirm } = setup()
  fireEvent.click(particles)
  fireEvent.click(confirm)
  expect(getValueLastCalledWith<SentenceStructureSettings>(onConfirmHandler).particles).toBe(false)
})

test("Clicking the expressions switch should exclude them in the data settings", () => {
  const { expressions, confirm } = setup()
  fireEvent.click(expressions)
  fireEvent.click(confirm)
  expect(getValueLastCalledWith<SentenceStructureSettings>(onConfirmHandler).expressions).toBe(false)
})

test("Clicking the verbs switch should exclude them in the data settings", () => {
  const { verbs, confirm } = setup()
  fireEvent.click(verbs)
  fireEvent.click(confirm)
  expect(getValueLastCalledWith<SentenceStructureSettings>(onConfirmHandler).verbs).toBe(false)
})

test("Clicking the nouns switch should exclude them in the data settings", () => {
  const { nouns, confirm } = setup()
  fireEvent.click(nouns)
  fireEvent.click(confirm)
  expect(getValueLastCalledWith<SentenceStructureSettings>(onConfirmHandler).nouns).toBe(false)
})

test("Clicking the adjectives switch should exclude them in the data settings", () => {
  const { adjectives, confirm } = setup()
  fireEvent.click(adjectives)
  fireEvent.click(confirm)
  expect(getValueLastCalledWith<SentenceStructureSettings>(onConfirmHandler).adjectives).toBe(false)
})

test("Changing the quantity should update it in the data settings", () => {
  const { quantity, confirm } = setup()
  fireEvent.change(quantity, { target: { value: 50 } })
  fireEvent.click(confirm)
  expect(getValueLastCalledWith<SentenceStructureSettings>(onConfirmHandler).quantity).toBe(50)
})

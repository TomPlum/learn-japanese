import { act, fireEvent, screen } from "@testing-library/react"
import MatchQuestion, { MatchQuestionProps } from "../../../../components/game/questions/MatchQuestion"
import React from "react"
import renderReduxConsumer from "../../../renderReduxConsumer"

let props: MatchQuestionProps

const isValidHandler = jest.fn()
const ref = React.createRef<MatchQuestion>()

beforeEach(() => {
  props = {
    data: new Map([
      ["pa", "ぱ"],
      ["yo", "ヨ"],
      ["be", "ベ"]
    ]),
    hidden: false,
    isValid: isValidHandler
  }
})

const setup = () => {
  const component = renderReduxConsumer(<MatchQuestion {...props} ref={ref} />)
  return {
    questionOne: component.getByText("pa"),
    questionTwo: component.getByText("yo"),
    questionThree: component.getByText("be"),
    answerOne: component.getByText("ぱ"),
    answerTwo: component.getByText("ヨ"),
    answerThree: component.getByText("ベ"),
    ...component
  }
}

test("Answering all questions correctly should cause isCorrect() to return true", () => {
  const { questionOne, questionTwo, questionThree, answerOne, answerTwo, answerThree } = setup()

  //Drag Question 1 -> Answer 1
  fireEvent.mouseDown(questionOne)
  fireEvent.mouseUp(answerOne)

  //Drag Question 2 -> Answer 2
  fireEvent.mouseDown(questionTwo)
  fireEvent.mouseUp(answerTwo)

  //Drag Question 3 -> Answer 3
  fireEvent.mouseDown(questionThree)
  fireEvent.mouseUp(answerThree)

  expect(isCorrect()).toBe(true)
})

test("Answering one of questions wrong should cause isCorrect() to return false", () => {
  const { questionOne, questionTwo, questionThree, answerOne, answerTwo, answerThree } = setup()

  //Drag Question 1 -> Answer 1
  fireEvent.mouseDown(questionOne)
  fireEvent.mouseUp(answerOne)

  //Drag Question 2 -> Answer 3
  fireEvent.mouseDown(questionTwo)
  fireEvent.mouseUp(answerThree)

  //Drag Question 3 -> Answer 2
  fireEvent.mouseDown(questionThree)
  fireEvent.mouseUp(answerTwo)

  expect(isCorrect()).toBe(false)
})

test("Answering only one question should call the isValid event handler with false", () => {
  const { questionOne, answerOne } = setup()

  //Drag Question 1 -> Answer 1
  fireEvent.mouseDown(questionOne)
  fireEvent.mouseUp(answerOne)

  expect(isValidHandler).toHaveBeenLastCalledWith(false)
})

test("Answering all three questions should call the isValid event handler with true", () => {
  const { questionOne, questionTwo, questionThree, answerOne, answerTwo, answerThree } = setup()

  //Drag Question 1 -> Answer 1
  fireEvent.mouseDown(questionOne)
  fireEvent.mouseUp(answerOne)

  //Drag Question 2 -> Answer 3
  fireEvent.mouseDown(questionTwo)
  fireEvent.mouseUp(answerThree)

  //Drag Question 3 -> Answer 2
  fireEvent.mouseDown(questionThree)
  fireEvent.mouseUp(answerTwo)

  //Even though we answered them incorrectly, the question is valid to be checked
  expect(isValidHandler).toHaveBeenLastCalledWith(true)
})

test('Clicking and holding a question should apply the "selected" class to it', () => {
  const { questionOne } = setup()

  //Should start with the default class
  expect(questionOne).toHaveClass("question")

  //Mouse down should apply 'selected'
  fireEvent.mouseDown(questionOne)
  expect(questionOne).toHaveClass("selected")
})

test('Clicking and holding a question and then releasing it on an answer should apply the "matched" class to both', () => {
  const { questionOne, answerOne } = setup()

  //Should start with the default classes
  expect(questionOne).toHaveClass("question")
  expect(answerOne).toHaveClass("answer")

  //Matching should apply 'matched' class.
  fireEvent.mouseDown(questionOne)
  fireEvent.mouseUp(answerOne)

  expect(questionOne).toHaveClass("matched")
  expect(answerOne).toHaveClass("matched")
})

test('Hovering the cursor over an an answer with a question selected should apply the "selected" class to the answer', () => {
  const { questionOne, answerOne } = setup()

  //Should start with the default class
  expect(answerOne).toHaveClass("answer")

  //Select Question (Answer class should remain the same)
  fireEvent.mouseDown(questionOne)
  expect(answerOne).toHaveClass("answer")

  //Hovering over the answer should change its class to 'selected'
  fireEvent.mouseOver(answerOne)
  expect(answerOne).toHaveClass("selected")

  //Moving the cursor out of the answer should revert its class back
  fireEvent.mouseOut(answerOne)
  expect(answerOne).toHaveClass("answer")
})

//TODO: Un-skip once the library is updated to forward the data-testid prop to the underlying div element
test.skip("Moving the cursor after selecting a question should draw a line", () => {
  const { container, questionOne } = setup()

  //Select Question 1 (No line should have been drawn at this point)
  fireEvent.mouseDown(questionOne)
  expect(screen.queryByTestId("pa-connector")).not.toBeInTheDocument()

  //Move mouse in container
  fireEvent.mouseMove(container, { clientX: 250, clientY: 250 })

  //Line should have been drawn
  expect(screen.getByTestId("pa-connector")).toBeInTheDocument()
})

test("Selecting an answer that is already matched should un-hook it and select the matched question", () => {
  const { questionOne, answerOne, answerTwo } = setup()

  //Select Question 1
  fireEvent.mouseDown(questionOne)
  expect(questionOne).toHaveClass("selected")

  //Match w/Answer 1
  fireEvent.mouseUp(answerOne)
  expect(questionOne).toHaveClass("matched")
  expect(answerOne).toHaveClass("matched")

  //Select Answer 1
  fireEvent.mouseDown(answerOne)
  expect(questionOne).toHaveClass("selected")
  expect(answerOne).toHaveClass("answer")

  //Select Answer 2
  fireEvent.mouseUp(answerTwo)
  expect(questionOne).toHaveClass("matched")
  expect(answerOne).toHaveClass("answer")
  expect(answerTwo).toHaveClass("matched")
})

test("Selecting a question but letting go of the mouse while still hovered on the question should release it", () => {
  const { questionOne } = setup()

  //Mouse Down Question 1
  fireEvent.mouseDown(questionOne)
  expect(questionOne).toHaveClass("selected")

  //Release (Without Moving)
  fireEvent.mouseUp(questionOne)
  expect(questionOne).toHaveClass("question")
})

function isCorrect(): boolean {
  let isCorrect = false
  act(() => {
    isCorrect = ref?.current?.isCorrect() ?? false
  })
  return isCorrect
}

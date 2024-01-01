import { fireEvent, render } from "@testing-library/react"
import SearchTag from "../../../components/learn/SearchTag"

const onClickHandler = vi.fn()

test("Should call the onClick event handler when clicking the tag", () => {
  const component = render(<SearchTag value="example" onSelect={onClickHandler} />)
  fireEvent.click(component.getByText("example"))
  expect(onClickHandler).toHaveBeenCalled()
})

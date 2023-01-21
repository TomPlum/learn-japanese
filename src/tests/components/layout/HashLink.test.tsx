import { fireEvent, render } from "@testing-library/react"
import HashLink, { HashLinkProps } from "../../../components/layout/HashLink"

const onClickHandler = jest.fn()

let props: HashLinkProps

beforeEach(() => {
  props = {
    path: "/path",
    disabled: false,
    className: "linkClass",
    onClick: onClickHandler
  }
})

const setup = () => {
  const component = render(
    <HashLink {...props}>
      <p>Example Link</p>
    </HashLink>
  )
  return {
    link: component.getByText("Example Link"),
    ...component
  }
}

test("Should wrap child component", () => {
  const { link } = setup()
  expect(link).toBeInTheDocument()
})

test("Should append the path property to the base name environment variable", () => {
  const { link } = setup()
  expect(link.parentElement).toHaveProperty("href", "http://localhost/example-base-path/path")
})

test("Should set the href as an empty string if no path is passed", () => {
  props.path = undefined
  const { link } = setup()
  expect(link.parentElement).toHaveProperty("href", "http://localhost/#")
})

test("Passing a className property should append it to the link component", () => {
  props.className = "example-class"
  const { link } = setup()
  expect(link.parentElement).toHaveClass("example-class")
})

test("Should disable the link when the disabled property is passed as true", () => {
  props.disabled = true
  const { link } = setup()
  expect(link.parentElement).toHaveAttribute("aria-disabled", "true")
})

test("Should call the onClick event handler when clicking the link", () => {
  const { link } = setup()
  fireEvent.click(link)
  expect(onClickHandler).toHaveBeenCalled()
})

test("Should propagate the style property to the underlying link component", () => {
  props.style = { width: "125px" }
  const { link } = setup()
  expect(link.parentElement).toHaveProperty("style._values.width", "125px")
})

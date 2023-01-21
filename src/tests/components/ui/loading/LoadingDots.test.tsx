import { render } from "@testing-library/react"
import LoadingDots from "../../../../components/ui/loading/LoadingDots"

test("It should apply the correct class name based on the given animation", () => {
    const component = render(<LoadingDots type="flashing" />)
    expect(component.getByTestId("loading-dots")).toHaveClass("dot-flashing")
})

test("It should apply the given class name", () => {
    const component = render(<LoadingDots type="flashing" className="testClassName" />)
    expect(component.getByTestId("loading-dots")).toHaveClass("testClassName")
})

test("It should apply the given animation duration in seconds", () => {
    const component = render(<LoadingDots type="flashing" duration={3} />)
    expect(component.getByTestId("loading-dots")).toHaveStyle({ "animation-duration": "3s" })
})

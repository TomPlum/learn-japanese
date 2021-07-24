import { render } from "@testing-library/react";
import DynamicDisplay from "../../../../components/ui/display/DynamicDisplay";

test("It should display the passed value", () => {
    const component = render(<DynamicDisplay value="は" />);
    expect(component.getByText("は")).toBeInTheDocument();
});

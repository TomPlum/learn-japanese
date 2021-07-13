import { render } from "@testing-library/react";
import GameInputField, { GameInputFieldProps } from "../../../../components/ui/fields/GameInputField";
import PopOver from "../../../../components/ui/PopOver";

const popover = <PopOver title="Popover Title" text="Popover Text" />

let props: GameInputFieldProps;

const setup = () => {
    const component = render(<GameInputField {...props} />);
    return {
        input: component.getByPlaceholderText("Test Input Field"),
        ...component
    }
}

beforeEach(() => {
    props = {
        placeholder: "Test Input Field",
        helpPopover: popover
    }
});

//TODO: Jest's toHaveFocus() seems to return the element wrapped in <body> and <div> tags so assertion fails.
test.skip('Should Focus Input', () => {
    const { input } = setup();
    expect(input).toHaveFocus();
});
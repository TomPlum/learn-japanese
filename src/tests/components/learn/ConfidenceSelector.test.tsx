import { fireEvent, render, screen } from "@testing-library/react";
import ConfidenceSelector, { ConfidenceSelectorProps } from "../../../components/learn/ConfidenceSelector";
import { Confidence } from "../../../domain/learn/spacedrepetition/Confidence";
import { findByTextWithElements } from "../../Queries";

let props: ConfidenceSelectorProps;
const onSelectHandler = jest.fn();

const setup = () => {
    const component = render(<ConfidenceSelector {...props} />);
    return {
        one: component.getByText('1'),
        two: component.getByText('2'),
        three: component.getByText('3'),
        four: component.getByText('4'),
        five: component.getByText('5'),
        six: component.getByText('6'),
        info: component.getByTestId('info'),
        ...component
    }
}

beforeEach(() => {
    props = {
        disabled: false,
        onSelect: onSelectHandler
    }
});

it("Should call the onSelect event handler with confidence level 1 after clicking", () => {
    const { one } = setup();
    fireEvent.click(one);
    expect(onSelectHandler).toHaveBeenCalledWith(Confidence.BLACKOUT);
});

it("Should call the onSelect event handler with confidence level 2 after clicking", () => {
    const { two } = setup();
    fireEvent.click(two);
    expect(onSelectHandler).toHaveBeenCalledWith(Confidence.INCORRECT_BUT_REMEMBERED);
});

it("Should call the onSelect event handler with confidence level 3 after clicking", () => {
    const { three } = setup();
    fireEvent.click(three);
    expect(onSelectHandler).toHaveBeenCalledWith(Confidence.INCORRECT_OBVIOUS_AFTERWARDS);
});

it("Should call the onSelect event handler with confidence level 4 after clicking", () => {
    const { four } = setup();
    fireEvent.click(four);
    expect(onSelectHandler).toHaveBeenCalledWith(Confidence.CORRECT_DIFFICULT_MEMORY);
});

it("Should call the onSelect event handler with confidence level 5 after clicking", () => {
    const { five } = setup();
    fireEvent.click(five);
    expect(onSelectHandler).toHaveBeenCalledWith(Confidence.CORRECT_SMALL_HESITATION);
});

it("Should call the onSelect event handler with confidence level 6 after clicking", () => {
    const { six } = setup();
    fireEvent.click(six);
    expect(onSelectHandler).toHaveBeenCalledWith(Confidence.PERFECT);
});

it("Should render the info menu when hovering over the button", async () => {
    const { info } = setup();
    fireEvent.mouseOver(info);
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
});

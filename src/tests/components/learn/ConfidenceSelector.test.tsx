import { fireEvent, screen } from "@testing-library/react";
import ConfidenceSelector, { ConfidenceSelectorProps } from "../../../components/learn/ConfidenceSelector";
import Confidence from "../../../domain/learn/spacedrepetition/Confidence";
import renderReduxConsumer from "../../renderReduxConsumer";
import { setUser, UserPreferences } from "../../../slices/UserSlice";
import { ConfidenceMenuStyle } from "../../../domain/learn/spacedrepetition/ConfidenceMenuStyle";
import { store } from "../../../store";

let props: ConfidenceSelectorProps;
const onSelectHandler = jest.fn();

const setup = () => {
    const component = renderReduxConsumer(<ConfidenceSelector {...props} />);
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
    store.dispatch(setUser({
        username: "TomPlum42",
        nickname: "Tom",
        email: "tom@hotmail.com",
        creationDate: "2021-08-09T00:00",
        expired: false,
        locked: false,
        credentialsExpired: false,
        enabled: true,
        roles: ["user"],
        token: "TOKEN",
        preferences: {
            defaultFont: "Mincho",
            theme: "Dark",
            language: "English",
            highScores: "Auto-Submit",
            cardsPerDay: 10,
            defaultMode: "Play",
            confidenceMenuStyle: ConfidenceMenuStyle.NUMBERS
        }
    }));

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

it("Should disable all the buttons when setting disabled as true", () => {
    props.disabled = true;
    const { one, two, three, four, five, six } = setup();
    expect(one).toBeDisabled();
    expect(two).toBeDisabled();
    expect(three).toBeDisabled();
    expect(four).toBeDisabled();
    expect(five).toBeDisabled();
    expect(six).toBeDisabled();
});

import { fireEvent } from "@testing-library/react";
import ConfidenceButton, { ConfidenceButtonProps } from "../../../components/learn/ConfidenceButton";
import Confidence from "../../../domain/learn/spacedrepetition/Confidence";
import renderReduxConsumer from "../../renderReduxConsumer";
import { store } from "../../../store";
import { setUser } from "../../../slices/UserSlice";
import { ConfidenceMenuStyle } from "../../../domain/learn/spacedrepetition/ConfidenceMenuStyle";

let props: ConfidenceButtonProps;
const onClickHandler = jest.fn();

const setup = () => {
    const component = renderReduxConsumer(<ConfidenceButton {...props} />);
    return {
        button: component.getByText('6'),
        ...component
    }
}

beforeEach(() => {
    props = {
        value: Confidence.PERFECT,
        disabled: false,
        selected: Confidence.PERFECT,
        className: 'menu',
        onClick: onClickHandler
    }

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
});

it("Should call the onClick event handler with the Confidence value upon clicking the button", () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(onClickHandler).toHaveBeenCalledWith(Confidence.PERFECT);
});

it("Should disable the button when the disabled property is passed as true", () => {
    props.disabled = true;
    const { button } = setup();
    expect(button).toBeDisabled();
});

it("Should enable the button when the disabled property is passed as false", () => {
    props.disabled = false;
    const { button } = setup();
    expect(button).not.toBeDisabled();
});

it("Should apply the disabled class if the disabled property is passed as true", () => {
    props.disabled = true;
    const { button } = setup();
    expect(button).toHaveClass('disabled');
});

it("Should apply the button class if the disabled property is passed as false", () => {
    props.disabled = false;
    const { button } = setup();
    expect(button).toHaveClass('button');
});

it("Should apply the selected class if the confidence value matches the selected", () => {
    props.value = Confidence.PERFECT;
    props.selected = Confidence.PERFECT;
    const { button } = setup();
    expect(button).toHaveClass('selected');
});

it("Should not apply the selected class if the confidence value doesnt match the selected", () => {
    props.value = Confidence.PERFECT;
    props.selected = Confidence.CORRECT_SMALL_HESITATION;
    const { button } = setup();
    expect(button).not.toHaveClass('selected');
});

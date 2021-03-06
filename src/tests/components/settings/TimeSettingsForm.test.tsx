import { fireEvent, render } from "@testing-library/react";
import TimeSettingsForm from "../../../components/settings/TimeSettingsForm";

const onChangeHandler = jest.fn();

const setup = () => {
    const component = render(<TimeSettingsForm onChange={onChangeHandler} />);
    return {
        timed: component.getByTestId('Timed'),
        countdown: component.getByTestId('Countdown'),
        ...component
    }
}

test('On mount it should call the onChange event handler with the default settings', () => {
    setup();
    expect(onChangeHandler).toHaveBeenCalledWith({ timed: true, countdown: false });
});

test('Selecting countdown when timed is enabled should de-select timed and enable countdown', () => {
    const { countdown } = setup();
    fireEvent.click(countdown);
    expect(onChangeHandler).toHaveBeenCalledWith({ timed: false, countdown: true });
});

test('Selecting timed when countdown is disabled should de-select timed', () => {
    const { timed } = setup();
    fireEvent.click(timed);
    expect(onChangeHandler).toHaveBeenCalledWith({ timed: false, countdown: false });
});

test('Selecting timed when countdown is enabled should de-select countdown and enable timed', () => {
    const { timed, countdown } = setup();
    fireEvent.click(countdown);
    fireEvent.click(timed);
    expect(onChangeHandler).toHaveBeenCalledWith({ timed: true, countdown: false });
});

test('Selecting countdown when it is enabled should disable it', () => {
    const { countdown } = setup();
    fireEvent.click(countdown);
    fireEvent.click(countdown);
    expect(onChangeHandler).toHaveBeenCalledWith({ timed: false, countdown: false });
});
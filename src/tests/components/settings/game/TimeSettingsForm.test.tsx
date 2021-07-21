import { fireEvent, render, screen } from "@testing-library/react";
import TimeSettingsForm from "../../../../components/settings/game/TimeSettingsForm";
import { TimeSettingsBuilder } from "../../../../types/session/settings/game/TimeSettings";

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
    expect(onChangeHandler).toHaveBeenCalledWith(
        new TimeSettingsBuilder().isTimed().withSecondsPerQuestion(10).build()
    );
});

test('Selecting countdown when timed is enabled should de-select timed and enable countdown', () => {
    const { countdown } = setup();

    fireEvent.click(countdown);

    expect(onChangeHandler).toHaveBeenCalledWith(
        new TimeSettingsBuilder().isTimed(false).isCountDown().withSecondsPerQuestion(10).build()
    );
});

test('Selecting timed when countdown is disabled should de-select timed', () => {
    const { timed } = setup();

    fireEvent.click(timed);

    expect(onChangeHandler).toHaveBeenCalledWith(
        new TimeSettingsBuilder().isTimed(false).isCountDown(false).withSecondsPerQuestion(10).build()
    );
});

test('Selecting timed when countdown is enabled should de-select countdown and enable timed', () => {
    const { timed, countdown } = setup();
    fireEvent.click(countdown);
    fireEvent.click(timed);
    expect(onChangeHandler).toHaveBeenCalledWith(
        new TimeSettingsBuilder().isTimed().withSecondsPerQuestion(10).build()
    );
});

test('Selecting countdown when it is enabled should disable it', () => {
    const { countdown } = setup();

    fireEvent.click(countdown);
    fireEvent.click(countdown);

    expect(onChangeHandler).toHaveBeenCalledWith(
        new TimeSettingsBuilder().isTimed(false).isCountDown(false).withSecondsPerQuestion(10).build()
    );
});

test('Selecting countdown should display the extra bit of descriptive text', () => {
    const { countdown } = setup();
    fireEvent.click(countdown);
    expect(screen.getByText('Select the number of seconds per question below:')).toBeInTheDocument();
});

test('De-selecting countdown should remove the extra bit of descriptive text', () => {
    const { countdown } = setup();

    fireEvent.click(countdown);
    fireEvent.click(countdown);

    expect(screen.queryByText(' Select the number of seconds per question below:')).not.toBeInTheDocument();
});

test('Selecting countdown and dragging the slider should change the seconds per question value', () => {
    const { container, countdown } = setup();

    fireEvent.click(countdown);

    const rangeSlider = container.firstChild?.firstChild?.childNodes[5].firstChild!; // Bad! :( How else can we select?
    fireEvent.change(rangeSlider, { target: { value: 45 }});

    expect(onChangeHandler).toHaveBeenLastCalledWith(
        new TimeSettingsBuilder().isTimed(false).isCountDown().withSecondsPerQuestion(45).build()
    );
});
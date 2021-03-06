import { fireEvent, render, screen } from "@testing-library/react";
import DisplaySettingsForm from "../../../components/settings/DisplaySettingsForm";
import { DisplayType } from "../../../types/DisplayType";

const onSelectHandler = jest.fn();

const setup = () => {
    const component = render(<DisplaySettingsForm onChange={onSelectHandler}/>);
    return {
        kanaModeButton: screen.getByText('Kana'),
        romanjiModeButton: screen.getByText('Romanji'),
        ...component
    }
}

test('On mount it should call the onSelect event handler with the default settings', () => {
    setup();
    expect(onSelectHandler).toHaveBeenCalledWith({ type: DisplayType.SINGLE_KANA, cards: 1 });
});

test('Selecting kana mode should call the onSelect eventHandler', () => {
    const { kanaModeButton } = setup();
    fireEvent.click(kanaModeButton);
    expect(onSelectHandler).toHaveBeenCalledWith({ type: DisplayType.MULTIPLE_CARDS, cards: 4 });
});

test('Selecting romanji mode should call the onSelect eventHandler', () => {
    const { kanaModeButton, romanjiModeButton } = setup();
    fireEvent.click(kanaModeButton);
    fireEvent.click(romanjiModeButton);
    expect(onSelectHandler).toHaveBeenLastCalledWith({ type: DisplayType.SINGLE_KANA, cards: 1 });
});

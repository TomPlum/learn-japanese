import { fireEvent, render, screen } from "@testing-library/react";
import DisplaySettingsForm from "../../../components/settings/DisplaySettingsForm";
import { DisplayType } from "../../../types/DisplayType";
import { Environment } from "../../../utility/Environment";

const onSelectHandler = jest.fn();
const environment = jest.fn();

const setup = () => {
    const component = render(<DisplaySettingsForm onChange={onSelectHandler}/>);
    return {
        kanaModeButton: screen.getByText('Kana'),
        romanjiModeButton: screen.getByText('Rōmaji'),
        ...component
    }
}

beforeEach(() => {
    Environment.variable = environment;
});

afterEach(() => {
    jest.restoreAllMocks();
});

test('On mount it should call the onSelect event handler with the default settings', () => {
    setup();
    expect(onSelectHandler).toHaveBeenCalledWith({ type: DisplayType.ROMAJI, cards: 1 });
});

test('Selecting kana mode should call the onSelect eventHandler', () => {
    const { kanaModeButton } = setup();
    fireEvent.click(kanaModeButton);
    expect(onSelectHandler).toHaveBeenCalledWith({ type: DisplayType.KANA, cards: 4 });
});

test('Selecting romanji mode should call the onSelect eventHandler', () => {
    const { kanaModeButton, romanjiModeButton } = setup();
    fireEvent.click(kanaModeButton);
    fireEvent.click(romanjiModeButton);
    expect(onSelectHandler).toHaveBeenLastCalledWith({ type: DisplayType.ROMAJI, cards: 1 });
});

test('Selecting kana mode should change the description accordingly', () => {
    environment.mockReturnValue('Kana mode description');
    const { kanaModeButton } = setup();

    fireEvent.click(kanaModeButton);

    expect(environment).toHaveBeenCalledWith('Kana_MODE_DESC');
    expect(screen.getByText('Kana mode description'))
});

test('Selecting romaji mode should change the description accordingly', () => {
    environment.mockReturnValue('Romaji mode description');
    const { romanjiModeButton } = setup();

    fireEvent.click(romanjiModeButton);

    expect(environment).toHaveBeenCalledWith('Rōmaji_MODE_DESC');
    expect(screen.getByText('Romaji mode description'))
});
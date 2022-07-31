import { fireEvent, render, screen } from "@testing-library/react";
import LearnButton from "../../../../components/ui/buttons/LearnButton";
import { when } from "jest-when";

const mockTranslation = jest.fn();
jest.mock('react-i18next', () => ({
    useTranslation: () => { return { t: mockTranslation, } }
}));

const setup = () => {
    const component = render(<LearnButton/>);
    return {
        button: component.getByTestId('learning-resources-button'),
        ...component
    }
}

beforeEach(() => {
    when(mockTranslation).calledWith("navigation.button.learn").mockReturnValue("Learn");
    when(mockTranslation).calledWith("navigation.button.kanji-dict").mockReturnValue("Kanji Dictionary");
    when(mockTranslation).calledWith("navigation.button.kana-dict").mockReturnValue("Kana Dictionary");
    when(mockTranslation).calledWith("navigation.button.genki-dict").mockReturnValue("Genki Knowledge Bank");
});

test('Clicking on the kanji bank link should route to the kanji page', async () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByText('Kanji Dictionary')).toHaveAttribute('href', "/example-base-path/kanji");
});

test('Clicking on the kanji bank link should route to the kanji page', async () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByText('Kana Dictionary')).toHaveAttribute('href', "/example-base-path/kana");
});

test('Clicking on the genki knowledge bank link should route to the genki page', async () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByText('Genki Knowledge Bank')).toHaveAttribute('href', "/example-base-path/genki");
});

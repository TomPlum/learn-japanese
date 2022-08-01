import { fireEvent, render, screen } from "@testing-library/react";
import HelpButton from "../../../../components/ui/buttons/HelpButton";
import { when } from "jest-when";

const mockTranslation = jest.fn();
jest.mock('react-i18next', () => ({
    useTranslation: () => { return { t: mockTranslation, } }
}));


const setup = () => {
    const component = render(<HelpButton />);
    return {
        button: component.getByTestId('help-button'),
        ...component
    }
}

beforeEach(() => {
    when(mockTranslation).calledWith("navigation.button.help").mockReturnValue("Help");
    when(mockTranslation).calledWith("navigation.button.sm2").mockReturnValue("SuperMemo2 Algorithm");
    when(mockTranslation).calledWith("navigation.button.faq").mockReturnValue("Frequently Asked Questions");
});

test('Should render the help text', async () => {
    setup();
    expect(screen.getByText('Help')).toBeInTheDocument();
});

test('Clicking on the super memo 2 algorithm link should route to the help page', async () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByText('SuperMemo2 Algorithm')).toHaveAttribute('href', "/example-base-path/help");
});

test('Clicking on the FAQs link should route to the help page', async () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByText('Frequently Asked Questions')).toHaveAttribute('href', "/example-base-path/help");
});

import { render } from "@testing-library/react";
import HomeButton from "../../../../components/ui/buttons/HomeButton";
import { when } from "jest-when";

const mockTranslation = jest.fn();
jest.mock('react-i18next', () => ({
    useTranslation: () => { return { t: mockTranslation, } }
}));

test('It should render the text from the translation', () => {
    when(mockTranslation).calledWith("navigation.button.home").mockReturnValue("Home");
    const component = render(<HomeButton />);
    expect(component.getByText('Home')).toBeInTheDocument();
});

import { fireEvent, screen } from "@testing-library/react";
import LearnButton from "../../../../components/ui/buttons/LearnButton";
import renderWithTranslation from "../../../renderWithTranslation";

const setup = () => {
    const component = renderWithTranslation(<LearnButton/>);
    return {
        button: component.getByTestId('learning-resources-button'),
        ...component
    }
}

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

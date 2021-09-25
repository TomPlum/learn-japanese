import { fireEvent, screen } from "@testing-library/react";
import Preferences from "../../../../components/user/profile/Preferences";
import renderReduxConsumer from "../../../renderReduxConsumer";

const setup = () => {
    const component = renderReduxConsumer(<Preferences />);
    return {
        font: component.getByText('Default'),
        theme: component.getByText('Dark Mode'),
        language: component.getByText('English'),
        highScores: component.getByText('Ask Each Time'),
        appMode: component.getByText('Play'),
        ...component
    }
}

test('Should render the save button if the default font preference changes', () => {
    //Should not render the button on mount
    const { font } = setup();
    expect(screen.queryByTitle('Save')).not.toBeInTheDocument();

    //Change the default font preference
    fireEvent.click(font);
    fireEvent.click(screen.getByText('Mincho'));

    //It should render the save button
    expect(screen.getByTitle('Save')).toBeInTheDocument();
});

test('Should render the save button if the default theme changes', () => {
    //Should not render the button on mount
    const { theme } = setup();
    expect(screen.queryByTitle('Save')).not.toBeInTheDocument();

    //Change the default theme preference
    fireEvent.click(theme);
    fireEvent.click(screen.getByText('Light Mode'));

    //It should render the save button
    expect(screen.getByTitle('Save')).toBeInTheDocument();
});

test('Should render the save button if the default language changes', () => {
    //Should not render the button on mount
    const { language } = setup();
    expect(screen.queryByTitle('Save')).not.toBeInTheDocument();

    //Change the default language preference
    fireEvent.click(language);
    fireEvent.click(screen.getByText('日本語'));

    //It should render the save button
    expect(screen.getByTitle('Save')).toBeInTheDocument();
});

test('Should render the save button if the default app mode changes', () => {
    //Should not render the button on mount
    const { appMode } = setup();
    expect(screen.queryByTitle('Save')).not.toBeInTheDocument();

    //Change the default app mode preference
    fireEvent.click(appMode);
    fireEvent.click(screen.getByText('Learn'));

    //It should render the save button
    expect(screen.getByTitle('Save')).toBeInTheDocument();
});

test('Should render the save button if the default high-scores changes', () => {
    //Should not render the button on mount
    const { highScores } = setup();
    expect(screen.queryByTitle('Save')).not.toBeInTheDocument();

    //Change the default high-scores preference
    fireEvent.click(highScores);
    fireEvent.click(screen.getByText('Never Submit'));

    //It should render the save button
    expect(screen.getByTitle('Save')).toBeInTheDocument();
});

test('Clicking the save button should remove it after the save is complete', () => {
    //Should not render the button on mount
    const { highScores } = setup();
    expect(screen.queryByTitle('Save')).not.toBeInTheDocument();

    //Change the default high-scores preference
    fireEvent.click(highScores);
    fireEvent.click(screen.getByText('Never Submit'));

    //Click save
    fireEvent.click(screen.getByTitle('Save'));

    //It should stop rendering it
    expect(screen.queryByTitle('Save')).not.toBeInTheDocument();
});

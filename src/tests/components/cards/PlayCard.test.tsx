import { fireEvent, screen } from "@testing-library/react";
import PlayCard from "../../../components/cards/PlayCard";
import renderReduxConsumer from "../../renderReduxConsumer";

test('Clicking the start button should launch the wizard', async () => {
    const component = renderReduxConsumer(<PlayCard />);
    fireEvent.click(component.getByTestId("launch-wizard"));
    expect(await screen.findByTestId('start-session-wizard')).toBeInTheDocument();
});

test('Closing the wizard should stop rendering it', async () => {
    // Launch Wizard
    const component = renderReduxConsumer(<PlayCard />);
    fireEvent.click(component.getByTestId("launch-wizard"));
    expect(await component.findByTestId("start-session-wizard")).toBeInTheDocument();

    // Quit & Confirm
    fireEvent.click(screen.getByTitle('Close'));
    fireEvent.click(await screen.findByText('Yes'));

    // Should stop rendering wizard
    expect(await component.queryByTestId("start-session-wizard")).not.toBeInTheDocument();
});

import { fireEvent, screen } from "@testing-library/react";
import ConfidenceSelector, { ConfidenceSelectorProps } from "../../../components/learn/ConfidenceSelector";
import Confidence from "../../../domain/learn/spacedrepetition/Confidence";
import renderReduxConsumer from "../../renderReduxConsumer";
import { setUser } from "../../../slices/UserSlice";
import { ConfidenceMenuStyle } from "../../../domain/learn/spacedrepetition/ConfidenceMenuStyle";
import { store } from "../../../store";
import SpaceRepetitionFeedback from "../../../domain/learn/spacedrepetition/SpaceRepetitionFeedback";
import Definition from "../../../domain/sentence/Definition";
import SpaceRepetitionDetails from "../../../domain/learn/spacedrepetition/SpaceRepetitionDetails";
import { FlashCard } from "../../../domain/learn/FlashCard";

const mockGetDaysTillNextReview = jest.fn();
jest.mock("../../../service/SpacedRepetitionService", () => {
    return function() { return { getDaysTillNextReview: mockGetDaysTillNextReview } };
});

let props: ConfidenceSelectorProps;
const onSelectHandler = jest.fn();

const setup = () => {
    const component = renderReduxConsumer(<ConfidenceSelector {...props} />);
    return {
        one: component.getByText('1'),
        two: component.getByText('2'),
        three: component.getByText('3'),
        four: component.getByText('4'),
        five: component.getByText('5'),
        six: component.getByText('6'),
        info: component.getByTestId('info'),
        ...component
    }
}

beforeEach(() => {
    store.dispatch(setUser({
        username: "TomPlum42",
        nickname: "Tom",
        email: "tom@hotmail.com",
        creationDate: "2021-08-09T00:00",
        expired: false,
        locked: false,
        credentialsExpired: false,
        enabled: true,
        roles: ["user"],
        token: "TOKEN",
        refreshToken: "REFRESH_TOKEN",
        preferences: {
            defaultFont: "Mincho",
            theme: "Dark",
            language: "English",
            highScores: "Auto-Submit",
            cardsPerDay: 10,
            defaultMode: "Play",
            confidenceMenuStyle: ConfidenceMenuStyle.NUMBERS
        }
    }));

    mockGetDaysTillNextReview.mockReturnValue(5);

    const definition = new Definition(["interesting", "funny"], "面白い", "おもしろい", "い Adjective");
    const spaceRepetitionDetails = new SpaceRepetitionDetails(2.5, 0, 0, "2021-12-12");
    props = {
        disabled: false,
        onSelect: onSelectHandler,
        feedback: new SpaceRepetitionFeedback(new FlashCard(1, definition, spaceRepetitionDetails), Confidence.PERFECT)
    }
});

it("Should call the onSelect event handler with confidence level 1 after clicking", () => {
    const { one } = setup();
    fireEvent.click(one);
    expect(onSelectHandler).toHaveBeenCalledWith(Confidence.BLACKOUT);
});

it("Should call the onSelect event handler with confidence level 2 after clicking", () => {
    const { two } = setup();
    fireEvent.click(two);
    expect(onSelectHandler).toHaveBeenCalledWith(Confidence.INCORRECT_BUT_REMEMBERED);
});

it("Should call the onSelect event handler with confidence level 3 after clicking", () => {
    const { three } = setup();
    fireEvent.click(three);
    expect(onSelectHandler).toHaveBeenCalledWith(Confidence.INCORRECT_OBVIOUS_AFTERWARDS);
});

it("Should call the onSelect event handler with confidence level 4 after clicking", () => {
    const { four } = setup();
    fireEvent.click(four);
    expect(onSelectHandler).toHaveBeenCalledWith(Confidence.CORRECT_DIFFICULT_MEMORY);
});

it("Should call the onSelect event handler with confidence level 5 after clicking", () => {
    const { five } = setup();
    fireEvent.click(five);
    expect(onSelectHandler).toHaveBeenCalledWith(Confidence.CORRECT_SMALL_HESITATION);
});

it("Should call the onSelect event handler with confidence level 6 after clicking", () => {
    const { six } = setup();
    fireEvent.click(six);
    expect(onSelectHandler).toHaveBeenCalledWith(Confidence.PERFECT);
});

it("Should render the info menu when hovering over the button", async () => {
    const { info } = setup();
    fireEvent.mouseOver(info);
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
});

it("Should disable all the buttons when setting disabled as true", () => {
    props.disabled = true;
    const { one, two, three, four, five, six } = setup();
    expect(one).toBeDisabled();
    expect(two).toBeDisabled();
    expect(three).toBeDisabled();
    expect(four).toBeDisabled();
    expect(five).toBeDisabled();
    expect(six).toBeDisabled();
});

it("Should display the number of days until next review if more than 1", () => {
    mockGetDaysTillNextReview.mockReset().mockReturnValue(6);
    const { one } = setup();
    fireEvent.click(one);
    expect(screen.getByText('You\'ll see this card again in 6 days')).toBeInTheDocument();
});

it("Should display a message that you'll see the card again tomorrow if the day interval is 1", () => {
    mockGetDaysTillNextReview.mockReset().mockReturnValue(1);
    const { six } = setup();
    fireEvent.click(six);
    expect(screen.getByText('You\'ll see this card again tomorrow')).toBeInTheDocument();
});

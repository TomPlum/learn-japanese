import { fireEvent, render, screen } from "@testing-library/react";
import ModeSelectionMenu, { ModeSelectionMenuProps } from "../../../components/learn/ModeSelectionMenu";
import { Environment } from "../../../utility/Environment";
import Topic from "../../../types/Topic";
import { AppMode } from "../../../types/AppMode";
import { SessionSettings } from "../../../types/session/settings/SessionSettings";
import KanaSettings, { KanaSettingsBuilder } from "../../../types/session/settings/data/KanaSettings";
import LearnSettings from "../../../types/session/settings/LearnSettings";
import { CalendarSettingsBuilder } from "../../../types/session/settings/data/CalendarSettings";
import { getValueLastCalledWith } from "../../Queries";

describe("Example 1 - Kana (Customisable)", () => {
    const onStartHandler = jest.fn();
    const environment = jest.fn();

    let props: ModeSelectionMenuProps;

    beforeEach(() => {
        props = {
            topic: Topic.KANA,
            appMode: AppMode.LEARN,
            onStart: onStartHandler
        };

        Environment.variable = environment;
    });


    const setup = () => {
        const component = render(<ModeSelectionMenu {...props} />);
        return {
            hiragana: component.getByText('Hiragana'),
            katakana: component.getByText('Katakana'),
            diacriticals: component.getByText('Diacriticals'),
            diagraphs: component.getByText('Diagraphs'),
            all: component.getByText('All'),
            dataSettings: component.getByTitle('Data Settings'),
            start: component.getByText('Start'),
            ...component
        }
    }

    test('Selecting \'Hiragana\' preset should change the description', () => {
        environment.mockReturnValue('Hiragana description');
        const { hiragana } = setup();
        fireEvent.click(hiragana);
        expect(environment).toHaveBeenCalledWith('LEARN_KANA_Hiragana_DESC');
        expect(screen.getByText('Hiragana description')).toBeInTheDocument();
    });

    test('Selecting \'Katakana\' preset should change the description', () => {
        environment.mockReturnValue('Katakana description');
        const { katakana } = setup();
        fireEvent.click(katakana);
        expect(environment).toHaveBeenCalledWith('LEARN_KANA_Katakana_DESC');
        expect(screen.getByText('Katakana description')).toBeInTheDocument();
    });

    test('Selecting \'Diacriticals\' preset should change the description', () => {
        environment.mockReturnValue('Diacriticals description');
        const { diacriticals } = setup();
        fireEvent.click(diacriticals);
        expect(environment).toHaveBeenCalledWith('LEARN_KANA_Diacriticals_DESC');
        expect(screen.getByText('Diacriticals description')).toBeInTheDocument();
    });

    test('Selecting \'Diagraphs\' preset should change the description', () => {
        environment.mockReturnValue('Diagraphs description');
        const { diagraphs } = setup();
        fireEvent.click(diagraphs);
        expect(environment).toHaveBeenCalledWith('LEARN_KANA_Diagraphs_DESC');
        expect(screen.getByText('Diagraphs description')).toBeInTheDocument();
    });

    test('Selecting \'All\' preset should change the description', () => {
        environment.mockReturnValue('All description');
        const { all } = setup();
        fireEvent.click(all);
        expect(environment).toHaveBeenCalledWith('LEARN_KANA_All_DESC');
        expect(screen.getByText('All description')).toBeInTheDocument();
    });

    test('Should default to \'Hiragana\' preset', () => {
        const { start } = setup();
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalled();
    });

    test('Clicking Start with the Hiragana preset selected should call the onStart event handler', () => {
        const { start } = setup();
        fireEvent.click(start);
        const settings = SessionSettings.forLearning(new KanaSettingsBuilder().withHiragana().build(), new LearnSettings());
        expect(onStartHandler).toHaveBeenCalledWith(settings);
    });

    test('Clicking Start with the Katakana preset selected should call the onStart event handler', () => {
        const { start, katakana } = setup();
        fireEvent.click(katakana);
        fireEvent.click(start);
        const settings = SessionSettings.forLearning(new KanaSettingsBuilder().withKatakana().build(), new LearnSettings());
        expect(onStartHandler).toHaveBeenCalledWith(settings);
    });

    test('Clicking Start with the Diacriticals preset selected should call the onStart event handler', () => {
        const { start, diacriticals } = setup();
        fireEvent.click(diacriticals);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith(SessionSettings.forLearning(
            new KanaSettingsBuilder().withHiragana().withKatakana().withDiacriticals()
                .withDiagraphs(false).withRegularKana(false).withMaxQuantity().build(),
            new LearnSettings())
        );
    });

    test('Clicking Start with the Diagraphs preset selected should call the onStart event handler', () => {
        const { start, diagraphs } = setup();
        fireEvent.click(diagraphs);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith(SessionSettings.forLearning(
            new KanaSettingsBuilder() .withHiragana().withKatakana().withOnlyDiagraphs().withMaxQuantity().build(),
            new LearnSettings())
        );
    });

    test('Clicking Start with the All preset selected should call the onStart event handler', () => {
        const { start, all } = setup();
        fireEvent.click(all);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith(SessionSettings.forLearning(
            new KanaSettingsBuilder().withEverything().build(),
            new LearnSettings()
        ));
    });

    test('Setting the AppMode to Learn should render the search button', () => {
        props.appMode = AppMode.LEARN;
        setup();
        expect(screen.getByTitle('Search')).toBeInTheDocument();
    });

    test('Setting the AppMode to Learn should render the data settings button', () => {
        props.appMode = AppMode.LEARN;
        setup();
        expect(screen.getByTitle('Data Settings')).toBeInTheDocument();
    });

    test('Clicking the data settings button in Learn mode should render the data settings menu', () => {
        props.appMode = AppMode.LEARN;
        const { dataSettings } = setup();
        fireEvent.click(dataSettings);
        expect(screen.getByText('Hiragana & Katakana Settings')).toBeInTheDocument();
    });

    test('Clicking the back button in the data settings menu should return to the preset menu', () => {
        props.appMode = AppMode.LEARN;
        const { dataSettings } = setup();

        //Open Data Settings Menu
        fireEvent.click(dataSettings);
        expect(screen.getByText('Hiragana & Katakana Settings')).toBeInTheDocument();

        //Close Data Settings Menu
        fireEvent.click(screen.getByText('Back'));
        expect(screen.getByTitle('Data Settings')).toBeInTheDocument();
    });

    test('Resetting in the data settings menu should default back to the preset data settings', () => {
        props.appMode = AppMode.LEARN;
        render(<ModeSelectionMenu {...props} />);

        //Open Data Settings
        fireEvent.click(screen.getByTitle('Data Settings'));

        //Configure Something
        fireEvent.click(screen.getByTestId('katakana'));
        fireEvent.change(screen.getByPlaceholderText('Quantity'), { target: { value: 25 }});

        //Confirming should use the custom game settings
        fireEvent.click(screen.getByText('Confirm'));
        fireEvent.click(screen.getByText('Start'));
        expect((getValueLastCalledWith<SessionSettings>(onStartHandler).dataSettings as KanaSettings).katakana).toBe(true);

        //Resetting should default back to the selected preset settings
        fireEvent.click(screen.getByTitle('Data Settings'));
        fireEvent.click(screen.getByText('Reset'));
        fireEvent.change(screen.getByPlaceholderText('Quantity'), { target: { value: 25 }}); //Kana defaults to undefined quantity, so we need to set that
        fireEvent.click(screen.getByText('Confirm'));
        fireEvent.click(screen.getByText('Start'));
        expect((getValueLastCalledWith<SessionSettings>(onStartHandler).dataSettings as KanaSettings).katakana).toBe(false);
    });

    test('Setting the AppMode to Play should render the game settings button', () => {
        props.appMode = AppMode.PLAY;
        render(<ModeSelectionMenu {...props} />);
        expect(screen.getByTitle('Game Settings')).toBeInTheDocument();
    });

    test('Setting the AppMode to Play with a topic that has no custom menu should disable the data settings', () => {
        props.appMode = AppMode.PLAY;
        props.topic = Topic.CALENDAR;
        render(<ModeSelectionMenu {...props} />);
        expect(screen.getByTitle('This topic does not have data settings')).toBeDisabled();
    });

    test('Clicking the game settings button in Play mode should launch the game settings menu', () => {
        props.appMode = AppMode.PLAY;
        render(<ModeSelectionMenu {...props} />);
        fireEvent.click(screen.getByTitle('Game Settings'));
        expect(screen.getAllByText('Question Settings').length).toBeGreaterThan(0);
    });

    test('Quitting the game settings menu should return back to the preset screen', () => {
        props.appMode = AppMode.PLAY;
        render(<ModeSelectionMenu {...props} />);

        //Open Game Settings
        fireEvent.click(screen.getByTitle('Game Settings'));
        expect(screen.getAllByText('Question Settings').length).toBeGreaterThan(0);

        //Quit
        fireEvent.click(screen.getByText('Back'));
        expect(screen.getByTitle('Game Settings')).toBeInTheDocument();
    });

    test('Resetting in the game settings menu should default back to the preset game settings', () => {
        props.appMode = AppMode.PLAY;
        render(<ModeSelectionMenu {...props} />);

        //Open Game Settings
        fireEvent.click(screen.getByTitle('Game Settings'));

        //Configure Something
        fireEvent.click(screen.getByTitle('Time Settings'));
        fireEvent.click(screen.getByTestId('Countdown'));

        //Confirming should use the custom game settings
        fireEvent.click(screen.getByText('Confirm'));
        fireEvent.click(screen.getByText('Start'));
        expect(getValueLastCalledWith<SessionSettings>(onStartHandler).gameSettings?.time.countdown).toBe(true);

        //Resetting should default back to the selected preset settings
        fireEvent.click(screen.getByTitle('Game Settings'));
        fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByText('Confirm'));
        fireEvent.click(screen.getByText('Start'));
        expect(getValueLastCalledWith<SessionSettings>(onStartHandler).gameSettings?.time.countdown).toBe(false);
    });
});

describe("Example 2 - Calendar", () => {
    const onStartHandler = jest.fn();
    const environment = jest.fn();

    const setup = () => {
        const component = render(<ModeSelectionMenu topic={Topic.CALENDAR} appMode={AppMode.LEARN} onStart={onStartHandler}/>);
        return {
            days: component.getByText('Days of the Week'),
            months: component.getByText('Months of the Year'),
            nouns: component.getByText('Temporal Nouns'),
            seasonal: component.getByText('Seasonal'),
            phrases: component.getByText('Common Phrases'),
            all: component.getByText('Everything'),
            start: component.getByText('Start'),
            search: component.getByTitle('Search'),
            ...component
        }
    }

    beforeEach(() => {
        Environment.variable = environment;
    });

    test('Selecting \'Days of the Week\' preset should change the description', () => {
        environment.mockReturnValue('Days of the Week description');
        const { days } = setup();
        fireEvent.click(days);
        expect(environment).toHaveBeenCalledWith('LEARN_CALENDAR_Days of the Week_DESC');
        expect(screen.getByText('Days of the Week description')).toBeInTheDocument();
    });

    test('Selecting \'Months of the Year\' preset should change the description', () => {
        environment.mockReturnValue('Months of the Year description');
        const { months } = setup();
        fireEvent.click(months);
        expect(environment).toHaveBeenCalledWith('LEARN_CALENDAR_Months of the Year_DESC');
        expect(screen.getByText('Months of the Year description')).toBeInTheDocument();
    });

    test('Selecting \'Temporal Nouns\' preset should change the description', () => {
        environment.mockReturnValue('Temporal Nouns description');
        const { nouns } = setup();
        fireEvent.click(nouns);
        expect(environment).toHaveBeenCalledWith('LEARN_CALENDAR_Temporal Nouns_DESC');
        expect(screen.getByText('Temporal Nouns description')).toBeInTheDocument();
    });

    test('Selecting \'Seasonal\' preset should change the description', () => {
        environment.mockReturnValue('Seasonal description');
        const { seasonal } = setup();
        fireEvent.click(seasonal);
        expect(environment).toHaveBeenCalledWith('LEARN_CALENDAR_Seasonal_DESC');
        expect(screen.getByText('Seasonal description')).toBeInTheDocument();
    });

    test('Selecting \'Common Phrases\' preset should change the description', () => {
        environment.mockReturnValue('Common Phrases description');
        const { phrases } = setup();
        fireEvent.click(phrases);
        expect(environment).toHaveBeenCalledWith('LEARN_CALENDAR_Common Phrases_DESC');
        expect(screen.getByText('Common Phrases description')).toBeInTheDocument();
    });

    test('Selecting \'All\' preset should change the description', () => {
        environment.mockReturnValue('All description');
        const { all } = setup();
        fireEvent.click(all);
        expect(environment).toHaveBeenCalledWith('LEARN_CALENDAR_Everything_DESC');
        expect(screen.getByText('All description')).toBeInTheDocument();
    });

    test('Clicking Start with the \'Days of the Week\' preset selected should call the onStart event handler', () => {
        const { start } = setup();
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith(
            SessionSettings.forLearning(new CalendarSettingsBuilder().withDays().build(), new LearnSettings())
        );
    });

    test('Clicking Start with the \'Months of the Year\' preset selected should call the onStart event handler', () => {
        const { start, months } = setup();
        fireEvent.click(months);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith(
            SessionSettings.forLearning(new CalendarSettingsBuilder().withMonths().build(), new LearnSettings())
        );
    });

    test('Clicking Start with the \'Temporal Nouns\' preset selected should call the onStart event handler', () => {
        const { start, nouns } = setup();
        fireEvent.click(nouns);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith(
            SessionSettings.forLearning(new CalendarSettingsBuilder().withTemporalNouns().build(), new LearnSettings())
        );
    });

    test('Clicking Start with the \'Seasonal\' preset selected should call the onStart event handler', () => {
        const { start, seasonal } = setup();
        fireEvent.click(seasonal);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith(
            SessionSettings.forLearning(new CalendarSettingsBuilder().withSeasons().build(), new LearnSettings())
        );
    });

    test('Clicking Start with the \'Common Phrases\' preset selected should call the onStart event handler', () => {
        const { start, phrases } = setup();
        fireEvent.click(phrases);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith(
            SessionSettings.forLearning(new CalendarSettingsBuilder().withPhrases().build(), new LearnSettings())
        );
    });

    test('Clicking Start with the \'Everything\' preset selected should call the onStart event handler', () => {
        const { start, all } = setup();
        fireEvent.click(all);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith(
            SessionSettings.forLearning(
                new CalendarSettingsBuilder().withDays().withMonths().withPhrases().withTemporalNouns().withSeasons().build(),
                new LearnSettings()
            )
        );
    });

    test('Clicking the Search button should launch the search menu with the selected topic', () => {
        const { days, search } = setup();
        fireEvent.click(days);
        fireEvent.click(search);
        expect(screen.getByText('Monday')).toBeInTheDocument();
    });
});

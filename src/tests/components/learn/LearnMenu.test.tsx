import { fireEvent, render, screen } from "@testing-library/react";
import LearnMenu from "../../../components/learn/LearnMenu";
import { Environment } from "../../../utility/Environment";
import { KyoikuGrade } from "../../../types/kanji/KyoikuGrade";
import Topic from "../../../types/Topic";
import { AppMode } from "../../../types/AppMode";

describe("Example 1 - Kana", () => {
    const onStartHandler = jest.fn();
    const environment = jest.fn();

    const setup = () => {
        const component = render(<LearnMenu topic={Topic.KANA} appMode={AppMode.LEARN} onStart={onStartHandler} />);
        return {
            hiragana: component.getByText('Hiragana'),
            katakana: component.getByText('Katakana'),
            diacriticals: component.getByText('Diacriticals'),
            diagraphs: component.getByText('Diagraphs'),
            all: component.getByText('All'),
            custom: component.getByText('Custom'),
            start: component.getByText('Start'),
            ...component
        }
    }

    beforeEach(() => {
        Environment.variable = environment;
    });

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
        expect(onStartHandler).toHaveBeenCalledWith({ kana : { hiragana: true } });
    });

    test('Clicking Start with the Katakana preset selected should call the onStart event handler', () => {
        const { start, katakana } = setup();
        fireEvent.click(katakana);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith({ kana : { katakana: true } });
    });

    test('Clicking Start with the Diacriticals preset selected should call the onStart event handler', () => {
        const { start, diacriticals } = setup();
        fireEvent.click(diacriticals);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith({ kana: { diacriticals: true } });
    });

    test('Clicking Start with the Diagraphs preset selected should call the onStart event handler', () => {
        const { start, diagraphs } = setup();
        fireEvent.click(diagraphs);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith({ kana: { diagraphs: true } });
    });

    test('Clicking Start with the All preset selected should call the onStart event handler', () => {
        const { start, all } = setup();
        fireEvent.click(all);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith({
            kana: {
                hiragana: true, katakana: true, diagraphs: true, diacriticals: true
            }
        });
    });
});

describe("Example 2 - Calendar", () => {
    const onStartHandler = jest.fn();
    const environment = jest.fn();

    const setup = () => {
        const component = render(<LearnMenu topic={Topic.CALENDAR} appMode={AppMode.LEARN} onStart={onStartHandler}/>);
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
        expect(onStartHandler).toHaveBeenCalledWith({ calendar: { days: true } });
    });

    test('Clicking Start with the \'Months of the Year\' preset selected should call the onStart event handler', () => {
        const { start, months } = setup();
        fireEvent.click(months);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith({ calendar: { months: true } });
    });

    test('Clicking Start with the \'Temporal Nouns\' preset selected should call the onStart event handler', () => {
        const { start, nouns } = setup();
        fireEvent.click(nouns);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith({ calendar: { nouns: true } });
    });

    test('Clicking Start with the \'Seasonal\' preset selected should call the onStart event handler', () => {
        const { start, seasonal } = setup();
        fireEvent.click(seasonal);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith({ calendar: { season: true } });
    });

    test('Clicking Start with the \'Common Phrases\' preset selected should call the onStart event handler', () => {
        const { start, phrases } = setup();
        fireEvent.click(phrases);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith({ calendar: { phrases: true } });
    });

    test('Clicking Start with the \'Everything\' preset selected should call the onStart event handler', () => {
        const { start, all } = setup();
        fireEvent.click(all);
        fireEvent.click(start);
        expect(onStartHandler).toHaveBeenCalledWith({
            calendar: {
                days: true,
                months: true,
                season: true,
                nouns: true,
                phrases: true
            }
        });
    });

    test('Clicking the Search button should launch the search menu with the selected topic', () => {
        const { days, search } = setup();
        fireEvent.click(days);
        fireEvent.click(search);
        expect(screen.getByText('Monday')).toBeInTheDocument();
    });
});

describe("Example 3 - Kanji (Customisable)", () => {
    const onStartHandler = jest.fn();
    const environment = jest.fn();

    const setup = () => {
        const component = render(<LearnMenu topic={Topic.KANJI} appMode={AppMode.LEARN} onStart={onStartHandler}/>);
        return {
            kyoiku: component.getByText('Kyōiku'),
            joyo: component.getByText('Jōyō'),
            numbers: component.getByText('Numbers'),
            colours: component.getByText('Colours'),
            time: component.getByText('Time'),
            custom: component.getByText('Custom'),
            start: component.getByText('Start'),
            ...component
        }
    }

    beforeEach(() => {
        Environment.variable = environment;
    });

    test('Selecting the \'Custom\' option should render the respective topics custom menu component', () => {
        const { custom } = setup();
        fireEvent.click(custom);
        expect(screen.getByText('Grade 1')).toBeInTheDocument();
    });

    test('Clicking start from a custom menu should call the onStart event handler', () => {
        const { custom } = setup();
        fireEvent.click(custom);
        fireEvent.click(screen.getByText('Grade 1'));
        fireEvent.click(screen.getByText('Grade 2'));
        fireEvent.click(screen.getByText('Start'));
        expect(onStartHandler).toHaveBeenCalledWith({ kanji: { grades: [KyoikuGrade.ONE, KyoikuGrade.TWO], joyo: false, quantity: undefined }});
    });
});
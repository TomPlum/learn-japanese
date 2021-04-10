import { fireEvent, render, screen } from "@testing-library/react";
import KanjiSettingsMenu from "../../../components/learn/kanji/KanjiSettingsMenu";
import { KyoikuGrade } from "../../../types/kanji/KyoikuGrade";

const onSelectedHandler = jest.fn();

const setup = () => {
    const component = render(<KanjiSettingsMenu onSelect={onSelectedHandler} />);
    return {
        grade1: component.getByText('Grade 1'),
        grade2: component.getByText('Grade 2'),
        grade3: component.getByText('Grade 3'),
        grade4: component.getByText('Grade 4'),
        grade5: component.getByText('Grade 5'),
        grade6: component.getByText('Grade 6'),
        random: component.getByText('Random 50'),
        submit: component.getByText('Start'),
        ...component
    }
}

test('It should render the title', () => {
    setup();
    expect(screen.getByText('Kyōiku Kanji')).toBeInTheDocument();
})

test('It should render the default description on load', () => {
    setup();
    expect(screen.getByText('Choose one or many grades below to begin.')).toBeInTheDocument();
});

test('Selecting a single grade should display the quantity in the description', () => {
   const { grade1 } = setup();
   fireEvent.click(grade1);
   expect(screen.getByText('Selected 80 Kanji')).toBeInTheDocument();
});

test('Selecting a multiple grades should display the cumulative quantity in the description', () => {
   const { grade1, grade3 } = setup();
   fireEvent.click(grade1);
   fireEvent.click(grade3);
   expect(screen.getByText('Selected 280 Kanji')).toBeInTheDocument();
});

test('Un-selecting a grade should remove it from the selection and update the description', () => {
   const { grade1, grade3 } = setup();
   fireEvent.click(grade1);
   fireEvent.click(grade3);
   fireEvent.click(grade3);
   expect(screen.getByText('Selected 80 Kanji')).toBeInTheDocument();
});

test('Clicking Random 50 should change the description', () => {
   const { random } = setup();
   fireEvent.click(random);
   expect(screen.getByText('Selected 50 random kanji from all grades.')).toBeInTheDocument();
});

test('Start button should be disabled on load', () => {
    const { submit } = setup();
    expect(submit).toBeDisabled();
});

test('Selecting a single grade should enable the submit button', () => {
    const { submit, grade4 } = setup();
    fireEvent.click(grade4)
    expect(submit).not.toBeDisabled();
});

test('Selecting multiple grades should enable the submit button', () => {
    const { submit, grade4, grade6 } = setup();
    fireEvent.click(grade4)
    fireEvent.click(grade6)
    expect(submit).not.toBeDisabled();
});

test('Selecting Random 50 should enable the submit button', () => {
    const { submit, random } = setup();
    fireEvent.click(random)
    expect(submit).not.toBeDisabled();
});

test('Clicking start with Kyoiku kanji selected should call the onSelected event handler with the selected grades', () => {
    const { submit, grade1 } = setup();
    fireEvent.click(grade1);
    fireEvent.click(submit);
    expect(onSelectedHandler).toHaveBeenCalledWith({ kanji: { grades: [KyoikuGrade.ONE], quantity: undefined, joyo: false } });
});

test('Clicking start with Random 50 selected should call the onSelected event handler with the correct settings', () => {
    const { submit, random } = setup();
    fireEvent.click(random);
    fireEvent.click(submit);
    expect(onSelectedHandler).toHaveBeenCalledWith({ kanji: { grades: [], quantity: 50, joyo: true } });
});
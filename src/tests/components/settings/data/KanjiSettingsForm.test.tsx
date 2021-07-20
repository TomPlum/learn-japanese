import { fireEvent, render, screen } from "@testing-library/react";
import KanjiSettingsForm from "../../../../components/settings/data/KanjiSettingsForm";
import { KyoikuGrade } from "../../../../types/kanji/KyoikuGrade";
import { SessionSettings } from "../../../../types/session/settings/SessionSettings";
import { KanjiSettingsBuilder } from "../../../../types/session/settings/data/KanjiSettings";
import LearnSettings from "../../../../types/session/settings/LearnSettings";

const onSelectedHandler = jest.fn();

const setup = () => {
    const component = render(<KanjiSettingsForm onSelect={onSelectedHandler} />);
    return {
        grade1: component.getByText('Grade 1'),
        grade2: component.getByText('Grade 2'),
        grade3: component.getByText('Grade 3'),
        grade4: component.getByText('Grade 4'),
        grade5: component.getByText('Grade 5'),
        grade6: component.getByText('Grade 6'),
        quantity: component.getByPlaceholderText('Quantity'),
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

test('Clicking start with Kyoiku kanji selected should call the onSelected event handler with the selected grades', () => {
    const { submit, grade1 } = setup();
    fireEvent.click(grade1);
    fireEvent.click(submit);
    expect(onSelectedHandler).toHaveBeenCalledWith(
        SessionSettings.forLearning(
            new KanjiSettingsBuilder().withGrades([KyoikuGrade.ONE]).withJoyoKanji(false).build(),
            new LearnSettings()
        )
    );
});

test('Entering a valid quantity should enable the submit button', () => {
    const { submit, quantity } = setup();
    fireEvent.change(quantity, { target: { value: 10 }});
    expect(submit).not.toBeDisabled();
});

test('Entering an invalid quantity should NOT enable the submit button', () => {
    const { submit, quantity } = setup();
    fireEvent.change(quantity, { target: { value: "a" }});
    expect(submit).toBeDisabled();
});

test('Clicking start with a quantity selected should call the onSelected event handler with the quantity', () => {
    const { submit, quantity } = setup();
    fireEvent.change(quantity, { target: { value: 10 }});
    fireEvent.click(submit);
    expect(onSelectedHandler).toHaveBeenCalledWith(
        SessionSettings.forLearning(
            new KanjiSettingsBuilder().withJoyoKanji(false).withQuantity(10).build(),
            new LearnSettings()
        )
    );
});

test('Clicking start with a quantity and grade selected should call the onSelected event handler with both', () => {
    const { grade1, submit, quantity } = setup();
    fireEvent.change(quantity, { target: { value: 10 }});
    fireEvent.click(grade1);
    fireEvent.click(submit);
    expect(onSelectedHandler).toHaveBeenCalledWith(
        SessionSettings.forLearning(
            new KanjiSettingsBuilder().withGrades([KyoikuGrade.ONE]).withJoyoKanji(false).withQuantity(10).build(),
            new LearnSettings()
        )
    );
});

test('Selecting all grades with a quantity specified should render the correct description', () => {
    const { grade1, grade2, grade3, grade4, grade5, grade6, quantity } = setup();

    fireEvent.click(grade1);
    fireEvent.click(grade2);
    fireEvent.click(grade3);
    fireEvent.click(grade4);
    fireEvent.click(grade5);
    fireEvent.click(grade6);
    fireEvent.change(quantity, { target: { value: 10 }});

    expect(screen.getByText('Selected 10 random kanji from all grades.')).toBeInTheDocument();
});

test('Selecting more than 1 grade with a quantity specified should render the correct description', () => {
    const { grade1, grade2, grade3, quantity } = setup();

    fireEvent.click(grade1);
    fireEvent.click(grade2);
    fireEvent.click(grade3);
    fireEvent.change(quantity, { target: { value: 25 }});

    expect(screen.getByText('Selected 25 random kanji from grades 1, 2 & 3.')).toBeInTheDocument();
});

test('Selecting exactly 1 grade with a quantity specified should render the correct description', () => {
    const { grade1, quantity } = setup();
    fireEvent.click(grade1);
    fireEvent.change(quantity, { target: { value: 15 }});
    expect(screen.getByText('Selected 15 random kanji from grade 1.')).toBeInTheDocument();
});
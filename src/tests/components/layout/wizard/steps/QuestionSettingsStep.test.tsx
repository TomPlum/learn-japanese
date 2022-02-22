import { fireEvent, render } from "@testing-library/react";
import QuestionSettingsStep from "../../../../../components/layout/wizard/steps/QuestionSettingsStep";
import QuestionSettings from "../../../../../domain/session/settings/game/QuestionSettings";
import QuestionType from "../../../../../domain/game/QuestionType";
import { getValueLastCalledWith } from "../../../../Queries";

const onSelectHandler = jest.fn();

test('Should render the question settings form', () => {
    const component = render(<QuestionSettingsStep onSelect={onSelectHandler} />);
    expect(component.getByTestId('question-settings-form')).toBeInTheDocument();
});

test('Changing a value in the form should call the onSelect event handler with the settings', () => {
    const component = render(<QuestionSettingsStep onSelect={onSelectHandler} />);

    fireEvent.click(component.getByText('Multiple Choice'));

    expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).type).toBe(QuestionType.CHOICE);
    expect(getValueLastCalledWith<QuestionSettings>(onSelectHandler).cards).toBe(4);
});

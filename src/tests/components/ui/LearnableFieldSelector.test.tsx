import { fireEvent, render, screen } from "@testing-library/react";
import LearnableFieldSelector, { LearnableFieldSelectorProps } from "../../../components/ui/LearnableFieldSelector";
import LearnableField from "../../../types/learn/LearnableField";
import userEvent from "@testing-library/user-event";

const onSelectHandler = jest.fn();

let props: LearnableFieldSelectorProps;

beforeEach(() => {
    props = {
        onSelect: onSelectHandler,
    }
})

const setup = () => {
    const component = render(<LearnableFieldSelector {...props} />);
    return {
        field: component.getByTestId('learnable-field-selector'),
        help: component.getByTestId('field-help'),
        ...component
    }
}

test('It should set the default value if the property is passed', () => {
    props.default = LearnableField.KANJI;
    const { field } = setup();
    expect(field).toHaveValue("Kanji");
});

test('Omitting the default property should cause the value to default to kana', () => {
    props.default = undefined;
    const { field } = setup();
    expect(field).toHaveValue("Kana");
});

test('Passing a field to exclude should prevent it from appearing in the select list', () => {
    props.exclude = LearnableField.RANDOM;
    const { field } = setup();
    expect(() => userEvent.selectOptions(field, "Random")).toThrow('Value "Random" not found in options');
});

test('It should call the onSelect event handler when changing the option', () => {
    props.default = LearnableField.KANA;
    const { field } = setup();
    userEvent.selectOptions(field, "Kanji")
    expect(onSelectHandler).toHaveBeenLastCalledWith(LearnableField.KANJI);
});

test('It should render an inline help icon that shows the name and description of the selected field', () => {
    const { field, help } = setup();

    userEvent.selectOptions(field, "Japanese");
    fireEvent.mouseOver(help);

    expect(screen.getByTitle("Japanese")).toBeInTheDocument();
    expect(screen.getByText(LearnableField.JAPANESE.description)).toBeInTheDocument();
});
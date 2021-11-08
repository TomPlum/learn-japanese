import { fireEvent, render, screen } from "@testing-library/react";
import SearchField, { SearchFieldProps } from "../../../../components/ui/fields/SearchField";

const onChangeHandler = jest.fn();
const onClearHandler = jest.fn();

let props: SearchFieldProps;

const setup = () => {
    const component = render(<SearchField {...props} />);
    return {
        ...component
    }
}

beforeEach(() => {
    props = {
        disabled: false,
        className: "mySearchField",
        append: "Results",
        placeholder: "Enter the romaji",
        value: "test",
        onChange: onChangeHandler,
        enableClear: false,
        onClear: onClearHandler
    };
});

test('Typing a character into the field should call the onChange event handler with the value', () => {
    setup();
    fireEvent.change(screen.getByPlaceholderText('Enter the romaji'), { target: { value: 'ka' }});
    expect(onChangeHandler).toHaveBeenCalledWith('ka');
});

test('Passing a value property should set it as the input field value', () => {
    props.value = "bya";
    setup();
    expect(screen.getByPlaceholderText('Enter the romaji')).toHaveValue('bya');
});

test('Passing the append property should render it in the input group', () => {
    props.append = '56 Results';
    setup();
    expect(screen.getByText('56 Results')).toBeInTheDocument();
});

test('Omitting the placeholder property should default the placeholder to \'Enter search term\'', () => {
    props.placeholder = undefined;
    setup();
    expect(screen.getByPlaceholderText('Enter search term')).toBeInTheDocument();
});

test('Passing the disabled prop as true should disable the input', () => {
    props.disabled = true;
    setup();
    expect(screen.getByPlaceholderText('Enter the romaji')).toBeDisabled();
});

test('Passing the disabled prop as false should disable the input', () => {
    props.disabled = false;
    setup();
    expect(screen.getByPlaceholderText('Enter the romaji')).not.toBeDisabled();
});

test('Passing enableClear as true should render a clear button', () => {
    props.enableClear = true;
    setup();
    expect(screen.getByTitle('Clear Search')).toBeInTheDocument();
});

test('Passing enableClear as false should not render a clear button', () => {
    props.enableClear = false;
    setup();
    expect(screen.queryByTitle('Clear Search')).not.toBeInTheDocument();
});

test('Clicking the clear button should call the onClear event handler', () => {
    props.enableClear = true;
    setup();
    fireEvent.click(screen.getByTitle('Clear Search'));
    expect(onClearHandler).toHaveBeenCalled();
});

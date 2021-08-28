import { fireEvent, render, screen } from "@testing-library/react";
import SearchField from "../../../../components/ui/fields/SearchField";

const onChangeHandler = jest.fn();

test('Typing a character into the field should call the onChange event handler with the value', () => {
    render(<SearchField onChange={onChangeHandler} placeholder="Enter the romaji" />);
    fireEvent.change(screen.getByPlaceholderText('Enter the romaji'), { target: { value: 'ka' }});
    expect(onChangeHandler).toHaveBeenCalledWith('ka');
});

test('Passing a value property should set it as the input field value', () => {
    render(<SearchField onChange={onChangeHandler} value={'bya'} placeholder="Enter the romaji" />);
    expect(screen.getByPlaceholderText('Enter the romaji')).toHaveValue('bya');
});

test('Passing the append property should render it in the input group', () => {
    const component = render(<SearchField onChange={onChangeHandler} append={'56 Results'} placeholder="Enter the romaji" />);
    expect(component.getByText('56 Results')).toBeInTheDocument();
});

test('Omitting the placeholder property should default the placeholder to \'Enter search term\'', () => {
    render(<SearchField onChange={onChangeHandler} />);
    expect(screen.getByPlaceholderText('Enter search term')).toBeInTheDocument();
});
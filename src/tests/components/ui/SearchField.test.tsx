import { fireEvent, render, screen } from "@testing-library/react";
import SearchField from "../../../components/ui/SearchField";

const onChangeHandler = jest.fn();

test('Typing a character into the field should call the onChange event handler with the value', () => {
    render(<SearchField onChange={onChangeHandler} />);
    fireEvent.change(screen.getByPlaceholderText('Enter the romaji'), { target: { value: 'ka' }});
    expect(onChangeHandler).toHaveBeenCalledWith('ka');
});

test('Passing a value property should set it as the input field value', () => {
    render(<SearchField onChange={onChangeHandler} value={'bya'} />);
    expect(screen.getByPlaceholderText('Enter the romaji')).toHaveValue('bya');
});

test('Passing the append property should render it in the input group', () => {
    const component = render(<SearchField onChange={onChangeHandler} append={'56 Results'} />);
    expect(component.getByText('56 Results')).toBeInTheDocument();
});
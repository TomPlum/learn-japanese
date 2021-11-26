import { fireEvent, render, screen } from "@testing-library/react";
import KeywordSearchField, { KeywordSearchFieldProps } from "../../../../components/ui/fields/KeywordSearchField";

let props: KeywordSearchFieldProps;

const onChangeHandler = jest.fn();
const onSubmitHandler = jest.fn();

beforeEach(() => {
    props = {
        value: "person",
        keywords: [{ key: "grade", type: "string" }, { key: "level", type: "string" }],
        className: "myClassName",
        disabled: false,
        onChange: onChangeHandler,
        onSubmit: onSubmitHandler
    };
});

const setup = () => {
    const component = render(<KeywordSearchField {...props} />);
    return {
        field: component.getByPlaceholderText('search'),
        ...component
    }
}

test("It should call the onChange event handler when entering a search term", () => {
    const { field } = setup();
    fireEvent.change(field, { target: { value: 'grade=' }});
    expect(onChangeHandler).toHaveBeenLastCalledWith('grade=');
});

test("It should set the field invalid if the term contains an '=' but doesn't contain a keyword", () => {
    const { field } = setup();
    fireEvent.change(field, { target: { value: 'unknown=' }});
    expect(onChangeHandler).not.toHaveBeenCalled();
});

test.todo("Fix enter key submission")
test.skip("It should call the onSubmit event handler when hitting the enter key when the term is valid and field enabled", () => {
    const { field } = setup();
    fireEvent.change(field, { target: { value: 'grade=123' }});
    fireEvent.keyDown(field, { key: 'Enter', code: 13, charCode: 13 });
    expect(onSubmitHandler).toHaveBeenLastCalledWith([{ key: "grade", type: "string" }], "");
});

test("It should render a parameter tag if a value is passed in for a keyword", () => {
    const { field } = setup();
    fireEvent.change(field, { target: { value: 'grade=1,2,3' }});
    expect(screen.getByText('Grade 1,2,3')).toBeInTheDocument();
});

test("It should update a parameter tag if a value is changed on an already valid keyword", () => {
    const { field } = setup();

    fireEvent.change(field, { target: { value: 'grade=1,2,3' }});
    expect(screen.getByText('Grade 1,2,3')).toBeInTheDocument();

    fireEvent.change(field, { target: { value: 'grade=1,2,3,4' }});
    expect(screen.getByText('Grade 1,2,3,4')).toBeInTheDocument();
});

test("Clicking the x-button on a parameter tag should dismiss it and stop rendering it", () => {
    const { field } = setup();

    fireEvent.change(field, { target: { value: 'grade=1,2,3' }});
    expect(screen.getByText('Grade 1,2,3')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("dismiss-tag"));
    expect(screen.queryByText('Grade 1,2,3')).not.toBeInTheDocument();
});

test("It should render a second parameter tag if two key-value pairs are present", () => {
    const { field } = setup();
    fireEvent.change(field, { target: { value: 'grade=1,2,3 level=N5' }});
    expect(screen.getByText('Level N5')).toBeInTheDocument();
});

test("It should call the onChange event handler with the search term if there is no keyword", () => {
    const { field } = setup();
    fireEvent.change(field, { target: { value: 'counter' }});
    expect(onChangeHandler).toHaveBeenLastCalledWith('counter');
});

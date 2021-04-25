import { fireEvent, render, screen } from "@testing-library/react";
import TopicSelectionMenu from "../../../components/layout/TopicSelectionMenu";
import Topic from "../../../types/Topic";
import { AppMode } from "../../../types/AppMode";

const onSelectHandler = jest.fn();

//TODO: It says the dropdown is not visible but it is not...
test.skip('Should render the list group when the viewport is sm or greater', () => {
    const component = render(<TopicSelectionMenu onSelect={onSelectHandler} appMode={AppMode.PLAY} />);
    expect(component.getByTestId('list-group-header')).toBeVisible();
    expect(component.getByTestId('list-group')).toBeVisible();
    expect(component.getByTestId('dropdown')).not.toBeVisible();
});

test('Selecting an option should call the onSelect handler', () => {
    const component = render(<TopicSelectionMenu onSelect={onSelectHandler} appMode={AppMode.PLAY} />);
    fireEvent.click(component.queryAllByText('Hiragana & Katakana')[1]);
    expect(onSelectHandler).toHaveBeenCalledWith(Topic.KANA);
});

test('Clicking a heading should not call the onSelect event handler', () => {
    const component = render(<TopicSelectionMenu onSelect={onSelectHandler} appMode={AppMode.PLAY} />);
    fireEvent.click(component.getByText('Select Game Mode'));
    expect(onSelectHandler).not.toHaveBeenCalled();
});

test('Passing the App Mode as \'Play\' should render the \'Select Game Mode\' heading', () => {
    render(<TopicSelectionMenu onSelect={onSelectHandler} appMode={AppMode.PLAY} />);
    expect(screen.getByText('Select Game Mode')).toBeInTheDocument();
});

test('Passing the App Mode as \'Learn\' should render the \'Select Topic\' heading', () => {
    render(<TopicSelectionMenu onSelect={onSelectHandler} appMode={AppMode.LEARN} />);
    expect(screen.getByText('Select Topic')).toBeInTheDocument();
});
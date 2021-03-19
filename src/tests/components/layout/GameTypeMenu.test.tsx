import { fireEvent, render } from "@testing-library/react";
import GameTypeMenu from "../../../components/layout/GameTypeMenu";
import { GameType } from "../../../types/GameType";

const onSelectHandler = jest.fn();

test('Should render the list group when the viewport is sm or greater', () => {
    const component = render(<GameTypeMenu onSelect={onSelectHandler} />);
    expect(component.getByTestId('list-group-header')).toBeVisible();
    expect(component.getByTestId('list-group')).toBeVisible();
    expect(component.getByTestId('dropdown')).not.toBeVisible();
});

test('Selecting an option should call the onSelect handler', () => {
    const component = render(<GameTypeMenu onSelect={onSelectHandler} />);
    fireEvent.click(component.queryAllByText('Hiragana & Katakana')[1]);
    expect(onSelectHandler).toHaveBeenCalledWith(GameType.KANA);
});
import { fireEvent, render } from "@testing-library/react";
import Adjective from "../../../../types/sentence/Adjective";
import { AdjectiveType } from "../../../../types/kana/AdjectiveType";
import SentenceStructureFlashCardBack from "../../../../components/learn/sentence/SentenceStructureFlashCardBack";

const onResetHandler = jest.fn();

const adjective = new Adjective(["interesting", "funny"], "面白い", AdjectiveType.I, "おもしろい");

test('Clicking the reset button should call the onReset event handler', () => {
    const component = render(<SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} />);
    fireEvent.click(component.getByTitle('Reset'));
    expect(onResetHandler).toHaveBeenCalled();
});

test('Should render the kanji variation', () => {
    const component = render(<SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} />);
    expect(component.getByText('面白い')).toBeInTheDocument();
});

test('Should render the kana', () => {
    const component = render(<SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} />);
    expect(component.getByText('(おもしろい)')).toBeInTheDocument();
});
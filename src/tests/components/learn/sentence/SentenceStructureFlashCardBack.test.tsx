import { fireEvent, render } from "@testing-library/react";
import Adjective from "../../../../types/sentence/Adjective";
import { AdjectiveType } from "../../../../types/sentence/AdjectiveType";
import SentenceStructureFlashCardBack from "../../../../components/learn/sentence/SentenceStructureFlashCardBack";
import { getByTextWithMarkup } from "../../../Queries";

const onResetHandler = jest.fn();

const adjective = new Adjective(["interesting", "funny"], "面白い", AdjectiveType.I, "おもしろい");

test('Clicking the reset button should call the onReset event handler', () => {
    const component = render(<SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} showRomaji={false} />);
    fireEvent.click(component.getByTitle('Reset'));
    expect(onResetHandler).toHaveBeenCalled();
});

test('Should render the kanji variation', () => {
    render(<SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} showRomaji={false} />);
    expect(getByTextWithMarkup('面白い')).toBeInTheDocument();
});

test('Should render the kana', () => {
    const component = render(<SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} showRomaji={false} />);
    expect(component.getByText('おもしろい')).toBeInTheDocument();
});

test('Should render the romaji if passed as true', () => {
    const component = render(<SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} showRomaji={true} />);
    expect(component.getByText('omoshiroi')).toBeInTheDocument();
});

test('Should render the romaji if passed as false', () => {
    const component = render(<SentenceStructureFlashCardBack data={adjective} onClick={onResetHandler} showRomaji={false} />);
    expect(component.queryByText('omoshiroi')).not.toBeInTheDocument();
});
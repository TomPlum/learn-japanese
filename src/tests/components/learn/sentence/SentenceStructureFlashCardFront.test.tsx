import { fireEvent, render } from "@testing-library/react";
import SentenceStructureFlashCardFront from "../../../../components/learn/sentence/SentenceStructureFlashCardFront";
import Adjective from "../../../../types/sentence/Adjective";
import { AdjectiveType } from "../../../../types/sentence/AdjectiveType";

const onClickHandler = jest.fn();

const adjective = new Adjective(["interesting", "funny"], "面白い", AdjectiveType.I, "おもしろい");

test('Clicking the card face should call the onClick event handler', () => {
    const component = render(<SentenceStructureFlashCardFront data={adjective} onClick={onClickHandler} />);
    fireEvent.click(component.getByText('interesting'));
    expect(onClickHandler).toHaveBeenCalled();
});

test('Multiple meanings should all render with an or in between', () => {
    const component = render(<SentenceStructureFlashCardFront data={adjective} onClick={onClickHandler} />);
    expect(component.getByText('interesting')).toBeInTheDocument();
    expect(component.getByText('or')).toBeInTheDocument();
    expect(component.getByText('funny')).toBeInTheDocument();
});
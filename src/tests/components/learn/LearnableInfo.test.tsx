import { render } from "@testing-library/react";
import LearnableInfo from "../../../components/learn/LearnableInfo";
import Adjective from "../../../types/sentence/Adjective";
import { AdjectiveType } from "../../../types/sentence/AdjectiveType";

const adjective = new Adjective(["interesting", "funny"], "面白い", AdjectiveType.I, "おもしろい");

test('Should render the meanings', () => {
    const component = render(<LearnableInfo value={adjective} />);
    expect(component.getByText('interesting or funny')).toBeInTheDocument();
});

test('Should render the kanji variation', () => {
    const component = render(<LearnableInfo value={adjective} />);
    expect(component.getByText('面白い')).toBeInTheDocument();
});

test('Should render the kana', () => {
    const component = render(<LearnableInfo value={adjective} />);
    expect(component.getByText('おもしろい')).toBeInTheDocument();
});

test('Should render a hyphen if the kanji variation is undefined', () => {
    const adjective = new Adjective(["interesting", "funny"], undefined, AdjectiveType.I, "おもしろい");
    const component = render(<LearnableInfo value={adjective} />);
    expect(component.getByText('-')).toBeInTheDocument();
});
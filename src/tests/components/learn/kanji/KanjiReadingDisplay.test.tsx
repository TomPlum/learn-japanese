import { fireEvent, render, screen } from "@testing-library/react";
import KanjiReadingDisplay from "../../../../components/learn/kanji/KanjiReadingDisplay";
import { ReadingType } from "../../../../types/kanji/ReadingType";
import { Reading } from "../../../../types/kanji/Reading";
import { Environment } from "../../../../utility/Environment";

const onReading = new Reading("nan", "なん", ReadingType.ON);
const kunReading = new Reading("minami", "みなみ", ReadingType.KUN);

const onReadingTwo = new Reading("koku", "こく", ReadingType.ON);

const mockEnvironment = jest.fn();

beforeEach(() => {
    Environment.variable = mockEnvironment;
});

test('Passing the reading type as ON should render the On label', () => {
    const component = render(<KanjiReadingDisplay type={ReadingType.ON} readings={[onReading]} showRomaji={false} />);
    expect(component.getByText('On')).toBeInTheDocument();
});

test('Passing the reading type as KUN should render the Kun label', () => {
    const component = render(<KanjiReadingDisplay type={ReadingType.KUN} readings={[kunReading]} showRomaji={false} />);
    expect(component.getByText('Kun')).toBeInTheDocument();
});

test('Should display the On-Yomi reading description when hovering over the \'On\' text', () => {
    mockEnvironment.mockReturnValue('Example on reading desc');
    const component = render(<KanjiReadingDisplay type={ReadingType.ON} readings={[onReading]} showRomaji={false} />);
    fireEvent.mouseOver(component.getByText('On'));
    expect(screen.getByTitle('On-yomi Reading')).toBeInTheDocument();
    expect(screen.getByText('Example on reading desc')).toBeInTheDocument();
});

test('Should display the Kun-Yomi reading description when hovering over the \'Kun\' text', () => {
    mockEnvironment.mockReturnValue('Example kun reading desc');
    const component = render(<KanjiReadingDisplay type={ReadingType.KUN} readings={[kunReading]} showRomaji={false} />);
    fireEvent.mouseOver(component.getByText('Kun'));
    expect(screen.getByTitle('Kun-yomi Reading')).toBeInTheDocument();
    expect(screen.getByText('Example kun reading desc')).toBeInTheDocument();
});

test('Passing in a single reading should render a descriptive title on the number 1', () => {
    const component = render(<KanjiReadingDisplay type={ReadingType.ON} readings={[onReading]} showRomaji={false} />);
    expect(component.getByTitle('This kanji has only one Jōyō on reading')).toBeInTheDocument();
});

test('Passing in an empty reading array should render N/A', () => {
    const component = render(<KanjiReadingDisplay type={ReadingType.ON} readings={[]} showRomaji={false} />);
    expect(component.getByText(': N/A')).toBeInTheDocument();
    expect(component.getByTitle('This kanji has no on reading')).toBeInTheDocument();
});

test('Passing the showRomaji property as true should show the romaji', () => {
    const component = render(<KanjiReadingDisplay type={ReadingType.ON} readings={[onReading]} showRomaji={true} />);
    expect(component.getByText('なん (nan)')).toBeInTheDocument();
});

test('Clicking the last (up) arrow when there are multiple readings and the first is selected, should wrap round to the end kana', () => {
    const component = render(<KanjiReadingDisplay type={ReadingType.ON} readings={[onReading, onReading, onReadingTwo]} showRomaji={false} />);
    expect(component.getByText('なん')).toBeInTheDocument();
    fireEvent.click(component.getByTitle('Last'));
    expect(component.getByText('こく')).toBeInTheDocument();
});

test('Clicking the next (down) arrow when there are multiple readings should change the kana', () => {
    const component = render(<KanjiReadingDisplay type={ReadingType.ON} readings={[onReading, onReadingTwo]} showRomaji={false} />);
    expect(component.getByText('なん')).toBeInTheDocument();
    fireEvent.click(component.getByTitle('Next'));
    expect(component.getByText('こく')).toBeInTheDocument();
});
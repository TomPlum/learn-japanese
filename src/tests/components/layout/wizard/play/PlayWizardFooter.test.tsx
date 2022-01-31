import { fireEvent, render, screen } from "@testing-library/react";
import PlayWizardFooter, { PlayWizardFooterProps } from "../../../../../components/layout/wizard/play/PlayWizardFooter";

const onNextHandler = jest.fn();
const onBackHandler = jest.fn();

let props: PlayWizardFooterProps;

beforeEach(() => {
    props = {
        onNext: onNextHandler,
        onBack: onBackHandler,
        terminal: false,
        intermediate: false
    }
});

test('Clicking the next button should call the onNext event handler', () => {
    const component = render(<PlayWizardFooter {...props} />)
    fireEvent.click(component.getByText('Next'));
    expect(onNextHandler).toHaveBeenCalled();
});

test('Clicking the back button should call the onBack event handler', () => {
    props.intermediate = true;
    const component = render(<PlayWizardFooter {...props} />)
    fireEvent.click(component.getByText('Back'));
    expect(onBackHandler).toHaveBeenCalled();
});

test('Passing terminal as true should render a back button', () => {
   props.terminal = true;
   const component = render(<PlayWizardFooter {...props} />)
   expect(component.getByText('Back')).toBeInTheDocument();
});

test('Passing intermediate as true should render a back button', () => {
   props.intermediate = true;
   const component = render(<PlayWizardFooter {...props} />)
   expect(component.getByText('Back')).toBeInTheDocument();
});

test('Passing terminal as true should render the next button text as "Play"', () => {
   props.terminal = true;
   const component = render(<PlayWizardFooter {...props} />)
   expect(component.getByText('Play')).toBeInTheDocument();
});

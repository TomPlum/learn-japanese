import { fireEvent, render } from "@testing-library/react";
import PlayWizardFooter, { PlayWizardFooterProps } from "../../../../../components/layout/wizard/footer/PlayWizardFooter";
import { AppMode } from "../../../../../domain/AppMode";

const onNextHandler = jest.fn();
const onBackHandler = jest.fn();
const onPlayHandler = jest.fn();
const onChangeStageHandler = jest.fn();

let props: PlayWizardFooterProps;

beforeEach(() => {
    props = {
        valid: true,
        custom: false,
        currentStage: 0,
        mode: AppMode.PLAY,
        onPlay: onPlayHandler,
        onNext: onNextHandler,
        onBack: onBackHandler,
        onChangeStage: onChangeStageHandler,
        terminal: false,
        intermediate: false
    }
});

test('Clicking the next button should call the onNext event handler', () => {
    const component = render(<PlayWizardFooter {...props} />);
    fireEvent.click(component.getByText('Next'));
    expect(onNextHandler).toHaveBeenCalled();
});

test('Clicking the back button should call the onBack event handler', () => {
    props.intermediate = true;
    const component = render(<PlayWizardFooter {...props} />);
    fireEvent.click(component.getByText('Back'));
    expect(onBackHandler).toHaveBeenCalled();
});

test('Passing terminal as true should render a back button', () => {
   props.terminal = true;
   const component = render(<PlayWizardFooter {...props} />);
   expect(component.getByText('Back')).toBeInTheDocument();
});

test('Passing intermediate as true should render a back button', () => {
   props.intermediate = true;
   const component = render(<PlayWizardFooter {...props} />);
   expect(component.getByText('Back')).toBeInTheDocument();
});

test('Passing terminal as true should render the next button text as "Start"', () => {
   props.terminal = true;
   const component = render(<PlayWizardFooter {...props} />);
   expect(component.getByText('Start')).toBeInTheDocument();
});

test('Selecting a stage from the progress component should call the onChangeStage handler', () => {
    const component = render(<PlayWizardFooter {...props} />);
    fireEvent.click(component.getByTitle('Topic'));
    expect(onChangeStageHandler).toHaveBeenLastCalledWith(1);
});

test('Passing valid as false should disable the next button', () => {
    props.valid = false;
    const component = render(<PlayWizardFooter {...props} />);
    expect(component.getByText('Next')).toBeDisabled();
});

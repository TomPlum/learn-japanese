import { fireEvent, render } from "@testing-library/react";
import PlayWizardFooter from "../../../../../components/layout/wizard/play/PlayWizardFooter";

const onNextHandler = jest.fn();

const setup = () => {
    const component = render(<PlayWizardFooter onNext={onNextHandler} />);
    return {
        next: component.getByText('Next'),
        ...component
    }
}

test('Clicking the next button should call the onNext event handler', () => {
    const { next } = setup();
    fireEvent.click(next);
    expect(onNextHandler).toHaveBeenCalled();
});

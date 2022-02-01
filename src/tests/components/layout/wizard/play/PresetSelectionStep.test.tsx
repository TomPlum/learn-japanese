import { render } from "@testing-library/react";
import PresetSelectionStep from "../../../../../components/layout/wizard/play/PresetSelectionStep";

const onNextEventHandler = jest.fn();
const onBackEventHandler = jest.fn();

const setup = () => {
    const component = render(<PresetSelectionStep onNext={onNextEventHandler} onBack={onBackEventHandler} />);
    return {
        ...component
    }
}

test.todo('Write these tests')

import { render } from "@testing-library/react";
import React from "react";
import PresetSelectionStep from "../../../../../components/layout/wizard/play/PresetSelectionStep";

const stageRef = React.createRef<any>();

const setup = () => {
    const component = render(<PresetSelectionStep ref={stageRef} />);
    return {
        ...component
    }
}

test.todo('Do these');

test.skip('Calling the getValue() function should return the selected preset', () => {
    setup();
    const value = stageRef.current?.getValue();
    expect(value).toBe("");
});

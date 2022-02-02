import { fireEvent, render, screen } from "@testing-library/react";
import GridDisplay, { GridDisplayProps } from "../../../../components/layout/wizard/GridDisplay";
import GridItem, { GridItemProps } from "../../../../components/layout/wizard/GridItem";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import PlayMode from "../../../../domain/session/PlayMode";
import { faGraduationCap, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { KanaSettingsBuilder } from "../../../../domain/session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../../../domain/session/settings/game/GameSettings";

const onClickItemHandler = jest.fn();

let gridProps: GridDisplayProps;
let itemProps: GridItemProps<PlayMode>;
let itemProps2: GridItemProps<PlayMode>;

const setup = () => {
    const component = render(
        <GridDisplay {...gridProps}>
            <GridItem {...itemProps} />
            <GridItem {...itemProps2} />
        </GridDisplay>
    );
    return {
        ...component
    }
}

beforeEach(() => {
    gridProps = {
        className: "myGrid",
        controls: false
    };

    itemProps = {
        icon: faApple,
        onClick: onClickItemHandler,
        name: "Test Mode",
        selected: "Test Mode",
        value: new PlayMode("Test Mode", "#fdb40e", faGraduationCap, new KanaSettingsBuilder().build(), new GameSettingsBuilder().build())
    };

    itemProps2 = {
        icon: faPencilAlt,
        onClick: onClickItemHandler,
        name: "Test Mode 2",
        selected: "Test Mode 2",
        value: new PlayMode("Test Mode 2", "#fdb40e", faGraduationCap, new KanaSettingsBuilder().build(), new GameSettingsBuilder().build())
    };
});

test('Passing controls as true should render the grid display options', () => {
    gridProps.controls = true;
    setup();
    expect(screen.getByTestId('grid-display-options')).toBeInTheDocument();
});

test('Passing controls as false should not render the grid display options', () => {
    gridProps.controls = false;
    setup();
    expect(screen.queryByTestId('grid-display-options')).not.toBeInTheDocument();
});

test('Should render the GridItem children passed to the grid when in grid mode', () => {
    gridProps.controls = true;
    setup();

    fireEvent.click(screen.getByTitle('Grid Layout'));
    expect(screen.getByText('Test Mode')).toBeInTheDocument();
});

test('Should render the GridItem children passed to the grid when in list mode', () => {
    gridProps.controls = true;
    setup();

    fireEvent.click(screen.getByTitle('List Layout'));
    expect(screen.getByText('Test Mode')).toBeInTheDocument();
});

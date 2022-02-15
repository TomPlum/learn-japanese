import { fireEvent, render, screen } from "@testing-library/react";
import GridDisplayOptions, { GridDisplayOptionsProps } from "../../../../components/layout/wizard/GridDisplayOptions";
import { getValueLastCalledWith } from "../../../Queries";
import { GridOptions } from "../../../../domain/grid/GridOptions";
import GridDisplayType from "../../../../domain/grid/GridDisplayType";

const onSelectHandler = jest.fn();

let props: GridDisplayOptionsProps;

const setup = () => {
    const component = render(<GridDisplayOptions {...props} />);
    return {
        grid: component.getByTitle('Grid Layout'),
        list: component.getByTitle('List Layout'),
        ...component
    }
}

beforeEach(() => {
    props = {
        onSelect: onSelectHandler,
        className: 'myDisplayOptions',
        defaultType: GridDisplayType.GRID
    };
});

test('Should call the onSelectEvent handler with the grid display type when selected', () => {
    const { grid } = setup();
    fireEvent.click(grid);
    expect(getValueLastCalledWith<GridOptions>(onSelectHandler).type).toBe(GridDisplayType.GRID);
});

test('Should call the onSelectEvent handler with the list display type when selected', () => {
    const { list } = setup();
    fireEvent.click(list);
    expect(getValueLastCalledWith<GridOptions>(onSelectHandler).type).toBe(GridDisplayType.LIST);
});

test('Should call the onSelectEvent handler with the size value when sliding the slider', () => {
    setup();
    fireEvent.change(screen.getByTitle('Item Size'), { target: { value: 120 } });
    expect(getValueLastCalledWith<GridOptions>(onSelectHandler).size).toBe(120);
});

test('Should set the display type to the given default if passed', () => {
    props.defaultType = GridDisplayType.LIST;
    setup();
    expect(getValueLastCalledWith<GridOptions>(onSelectHandler).type).toBe(GridDisplayType.LIST);
});

test('Should set the display type to the grid if a default is not passed', () => {
    props.defaultType = undefined;
    setup();
    expect(getValueLastCalledWith<GridOptions>(onSelectHandler).type).toBe(GridDisplayType.GRID);
});

test('Should not render the size slider if the display type is list', () => {
    props.defaultType = GridDisplayType.LIST;
    setup();
    expect(screen.queryByTitle('Item Size')).not.toBeInTheDocument();
});

import { fireEvent, render } from "@testing-library/react";
import GridDisplayOptions from "../../../../components/layout/wizard/GridDisplayOptions";
import { getValueLastCalledWith } from "../../../Queries";
import { GridOptions } from "../../../../domain/grid/GridOptions";
import { GridDisplayType } from "../../../../domain/grid/GridDisplayType";

const onSelectHandler = jest.fn();

const setup = () => {
    const component = render(<GridDisplayOptions onSelect={onSelectHandler} />);
    return {
        size: component.getByTitle('Item Size'),
        grid: component.getByTitle('Grid Layout'),
        list: component.getByTitle('List Layout'),
        ...component
    }
}

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
    const { size } = setup();
    fireEvent.change(size, { target: { value: 120 } });
    expect(getValueLastCalledWith<GridOptions>(onSelectHandler).size).toBe(120);
});

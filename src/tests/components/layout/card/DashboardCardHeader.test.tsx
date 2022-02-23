import { fireEvent, render } from "@testing-library/react";
import DashboardCardHeader from "../../../../components/layout/card/DashboardCardHeader";

const onReloadHandler = jest.fn();

test('Should render the children', () => {
    const component = render(
        <DashboardCardHeader>
            <span>Example Content</span>
        </DashboardCardHeader>
    );
    expect(component.getByText('Example Content')).toBeInTheDocument();
});

test('Should render the reload icon if a truthy error is passed', () => {
    const component = render(<DashboardCardHeader error="Something went wrong." />);
    expect(component.getByTitle('Retry')).toBeInTheDocument();
});

test('Should not render the reload icon if a falsy error is passed', () => {
    const component = render(<DashboardCardHeader error="" />);
    expect(component.queryByTitle('Retry')).not.toBeInTheDocument();
});

test('Clicking the reload icon should call the onReload event handler', () => {
    const component = render(<DashboardCardHeader error="Something went wrong." onReload={onReloadHandler} />);
    fireEvent.click(component.getByTitle('Retry'));
    expect(onReloadHandler).toHaveBeenCalled();
});

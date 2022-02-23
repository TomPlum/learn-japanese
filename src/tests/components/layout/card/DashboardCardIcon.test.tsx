import { fireEvent, render } from "@testing-library/react";
import DashboardCardIcon from "../../../../components/layout/card/DashboardCardIcon";
import { faApple } from "@fortawesome/free-brands-svg-icons";

const onClickHandler = jest.fn();

test('Should render the dashboard icon', () => {
    const component = render(<DashboardCardIcon icon={faApple} />);
    expect(component.getByTestId('dashboard-card-icon')).toBeInTheDocument();
});

test('Should call the onClick event handler when clicking the icon', () => {
    const component = render(<DashboardCardIcon icon={faApple} onClick={onClickHandler} />);
    fireEvent.click(component.getByTestId('dashboard-card-icon'));
    expect(onClickHandler).toHaveBeenCalled();
});

test('Should pass the title prop to the icon', () => {
    const component = render(<DashboardCardIcon icon={faApple} title="My Icon" />);
    expect(component.getByTitle('My Icon')).toBeInTheDocument();
});

test('Should pass the className prop to the icon', () => {
    const component = render(<DashboardCardIcon icon={faApple} className="myClassName" />);
    expect(component.getByTestId('dashboard-card-icon')).toHaveClass('myClassName');
});

test('Should pass the href prop to the icon', () => {
    const component = render(<DashboardCardIcon icon={faApple} href="https://test.com" />);
    expect(component.getByTestId('dashboard-card-icon')).toHaveAttribute('href', 'https://test.com');
});

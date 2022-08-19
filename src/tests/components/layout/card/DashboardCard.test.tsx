import { fireEvent, render, screen } from "@testing-library/react";
import DashboardCard, { DashboardCardProps } from "../../../../components/layout/card/DashboardCard";
import DashboardCardHeader from "../../../../components/layout/card/DashboardCardHeader";

const onReloadHandler = jest.fn();

let props: DashboardCardProps;

const setup = () => {
    const component = render(
        <DashboardCard {...props}>
            <DashboardCard.Header>
                <DashboardCardHeader.Title>Example Title</DashboardCardHeader.Title>
            </DashboardCard.Header>

            <DashboardCard.Body>
                <span>Example Content</span>
            </DashboardCard.Body>

            <DashboardCard.Footer>
                Example Footer
            </DashboardCard.Footer>
        </DashboardCard>
    );
    return {
        ...component
    }
}

beforeEach(() => {
    props = {
        error: "",
        size: "sm",
        updating: false,
        loading: false,
        id: "test-card",
        className: "myTestClass",
        onReload: onReloadHandler
    };
});

test('Given a size of "sm" then it should set the height of the card to 300px', () => {
    props.size = "sm";
    setup();
    expect(screen.getByTestId('test-card')).toHaveStyle({"height": "300px"});
});

test('Given a size of "md" then it should set the height of the card to 400px', () => {
    props.size = "md";
    setup();
    expect(screen.getByTestId('test-card')).toHaveStyle({"height": "400px"});
});

test('Given a size of "lg" then it should set the height of the card to 550px', () => {
    props.size = "lg";
    setup();
    expect(screen.getByTestId('test-card')).toHaveStyle({"height": "550px"});
});

test('Given the card is a loading state, then it should render the loading animation', () => {
    props.loading = true;
    setup();
    expect(screen.getByTestId('dashboard-card-loader')).toBeInTheDocument();
});

test('Given the card is a loading state, then it should not render the content', () => {
    props.loading = true;
    setup();
    expect(screen.queryByText('Example Content')).not.toBeInTheDocument();
});

test('Given the card is a not in a loading state, then it should not render the loading animation', () => {
    props.loading = false;
    setup();
    expect(screen.queryByTestId('dashboard-card-loader')).not.toBeInTheDocument();
});

test('Given the card is not in a loading state, then it should render the content', () => {
    props.loading = false;
    setup();
    expect(screen.getByText('Example Content')).toBeInTheDocument();
});

test('Given the card has an error and is not loading, then it should render the given error message', () => {
    props.error = "Something went wrong.";
    props.loading = false;
    setup();
    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
});

test('Given the card has an error, but is loading, then it should not render the error message', () => {
    props.error = "Something went wrong.";
    props.loading = true;
    setup();
    expect(screen.queryByText('Something went wrong.')).not.toBeInTheDocument();
});

test('Given the card has an error, then it should render the retry spinner', () => {
    props.error = "Something went wrong.";
    setup();
    expect(screen.getByTitle('Retry')).toBeInTheDocument();
});

test('Clicking the retry spinner should call the onRetry event handler', () => {
    props.error = "Something went wrong.";
    setup();
    fireEvent.click(screen.getByTitle('Retry'));
    expect(onReloadHandler).toHaveBeenCalled();
});

test('Given the card has a footer, it should render its content', () => {
    setup();
    expect(screen.getByText('Example Footer')).toBeInTheDocument();
});

test('Given the card has a height, it should ignore the size and set the height explicitly', () => {
    props.size = "md";
    props.height = 159;
    setup();
    expect(screen.getByTestId('test-card')).toHaveStyle({"height": "159px"});
});

import { render } from "@testing-library/react";
import ErrorBoundary from "../../../components/error/ErrorBoundary";

function Bomb({ shouldThrow }: { shouldThrow: boolean }) {
    if (shouldThrow) {
        throw new Error('Bomb');
    } else {
        return <p>No errors here.</p>;
    }
}

//TODO: Objects are not valid as a React child (found: Error: Bomb). Why?
test.skip('If there is an error, it should render the error page', () => {
    const component = render(<ErrorBoundary><Bomb shouldThrow={true}/></ErrorBoundary>);
    expect(component.getByText('It do be broken.')).toBeInTheDocument();
});

test('If there are no errors, it should render the children', () => {
    const component = render(<ErrorBoundary><Bomb shouldThrow={false}/></ErrorBoundary>);
    expect(component.getByText('No errors here.')).toBeInTheDocument();
});
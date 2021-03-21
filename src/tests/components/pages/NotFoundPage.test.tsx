import { render } from "@testing-library/react";
import NotFoundPage from "../../../components/pages/NotFoundPage";

test('Should render the heading', () => {
    const component = render(<NotFoundPage />);
    expect(component.getByText('Nani!?')).toBeInTheDocument();
})

test('Should render the description', () => {
    const component = render(<NotFoundPage />);
    expect(component.getByText('There doesn\'t appear to be anything here.')).toBeInTheDocument();
});

test('Should render the home button', () => {
    const component = render(<NotFoundPage />);
    expect(component.getByText('Home')).toBeInTheDocument();
});

test('Clicking the home button should direct the user to the root URI', () => {
    const component = render(<NotFoundPage />);
    expect(component.getByRole('link')).toHaveAttribute('href', '/');
});
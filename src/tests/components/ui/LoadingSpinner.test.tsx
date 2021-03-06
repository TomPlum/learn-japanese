import LoadingSpinner from "../../../components/ui/LoadingSpinner";
import { render, screen } from "@testing-library/react";

test('When active the loading spinner should render', () => {
    render(<LoadingSpinner active={true} />);
    expect(screen.getByTitle('Loading')).toBeInTheDocument();
});

test('When in-active the loading spinner should not render', () => {
    render(<LoadingSpinner active={false} />);
    expect(screen.queryByTitle('Loading')).not.toBeInTheDocument();
});
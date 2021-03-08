import { render, screen } from "@testing-library/react";
import LearnJapanese from "../LearnJapanese";
import { Environment } from "../utility/Environment";

beforeEach(() => {
    Environment.variable = jest.fn().mockReturnValue("landing page description");
});

test('Should render the main layout', () => {
    render(<LearnJapanese />);
    expect(screen.getByText('landing page description')).toBeInTheDocument();
});
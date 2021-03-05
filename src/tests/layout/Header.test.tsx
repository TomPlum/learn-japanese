import { render, screen } from "@testing-library/react";
import Header from "../../components/layout/Header";

test('Should render the logo', () => {
    render(<Header />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
});
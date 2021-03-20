import { render, screen } from "@testing-library/react";
import HashLink from "../../../components/layout/HashLink";

test('Should wrap child component', () => {
    render(<HashLink path="/path"><p>Example Link</p></HashLink>);
    expect(screen.getByText('Example Link')).toBeInTheDocument();
});

test('Should append the path property to the base name environment variable', () => {
    const { container } = render(<HashLink path="/path" />);
    expect(container.firstChild).toHaveProperty('href', 'http://localhost/example-base-path/path');
});

test('Passing a className property should append it to the link component', () => {
    const { container } = render(<HashLink path="/path" className="example-class" />);
    expect(container.firstChild).toHaveClass('example-class');
});
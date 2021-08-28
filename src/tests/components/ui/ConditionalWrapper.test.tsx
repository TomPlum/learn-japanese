import { render } from "@testing-library/react";
import ConditionalWrapper from "../../../components/ui/ConditionalWrapper";

test('Should render the wrapper if the condition is true', () => {
    const { container } = render(<ConditionalWrapper
        condition={true}
        children={<p>My text</p>}
        wrapper={(children) => <a href="/route">{children}</a>}
    />);
    expect(container.firstChild).toHaveAttribute("href", "/route");
});

test('Should render render only the children if the condition is false', () => {
    const { container } = render(<ConditionalWrapper
        condition={false}
        children={<p>My text</p>}
        wrapper={(children) => <a href="/route">{children}</a>}
    />);
    expect(container.firstChild).not.toHaveAttribute("href");
});

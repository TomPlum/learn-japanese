import { fireEvent, render, screen } from "@testing-library/react";
import ConfirmModal from "../../../components/ui/ConfirmModal";

const onConfirmHandler = jest.fn();
const onDismissHandler = jest.fn();

const setup = () => {
    const component = render(
        <ConfirmModal title={"Title"} body={"Body"} onConfirm={onConfirmHandler} onDismiss={onDismissHandler} />
    );
    return {
        title: component.getByText('Title'),
        yes: component.getByText('Yes'),
        no: component.getByText('No'),
        close: component.getByLabelText('Close')
    }
}

test('Should render with the passed title', () => {
   setup();
   expect(screen.getByText('Title')).toBeInTheDocument();
});

test('Should render with the passed body', () => {
   setup();
   expect(screen.getByText('Body')).toBeInTheDocument();
});

test('Clicking the \'Yes\' button should call the onConfirm event handler', () => {
    const { yes } = setup();
    fireEvent.click(yes);
    expect(onConfirmHandler).toHaveBeenCalled();
});

test('Clicking the \'No\' button should call the onDismiss event handler', () => {
    const { no } = setup();
    fireEvent.click(no);
    expect(onDismissHandler).toHaveBeenCalled();
});

test('Clicking the \'X\' close button should call the onDismiss event handler', () => {
    const { close } = setup();
    fireEvent.click(close);
    expect(onDismissHandler).toHaveBeenCalled();
});

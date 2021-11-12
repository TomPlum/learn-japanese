import NavigationButton, { ItemProps, NavigationButtonProps } from "../../../components/ui/NavigationButton";
import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const onClickButtonHandler = jest.fn();
const onClickItemHandler = jest.fn();

let buttonProps: NavigationButtonProps;
let itemProps: ItemProps;

beforeEach(() => {
    buttonProps = {
        text: "Test Button",
        icon: faSmile,
        width: 150,
        className: "myClassName",
        menuClass: "myMenuClassName",
        iconClass: "myIconClassName",
        textClass: "myTextClassName",
        disabled: false,
        disableDropdown: false,
        searchable: true,
        show: 5,
        onClick: onClickButtonHandler
    };

    itemProps = {
        icon: faCheckCircle,
        iconClass: "myItemIconClass",
        className: "myItemClass",
        href: "https://japanese.tomplumpton.me/my-link",
        style: {},
        onClick: onClickItemHandler
    };
});

const setup = () => {
    const component = render(
        <NavigationButton {...buttonProps}>
            <NavigationButton.Item {...itemProps}>
                My Link
            </NavigationButton.Item>

            <NavigationButton.Item {...itemProps}>
                My Second Link
            </NavigationButton.Item>
        </NavigationButton>
    );

    return {
        button: component.getByText('Test Button').parentElement!,
        ...component
    }
}

test('Clicking the button should call the onClick event handler if the dropdown is disabled', () => {
    buttonProps.disableDropdown = true;
    const { button } = setup();
    fireEvent.click(button);
    expect(onClickButtonHandler).toHaveBeenCalled();
});


test('Clicking the button should not call the onClick event handler if the dropdown is enabled', async () => {
    buttonProps.disableDropdown = false;
    const { button } = setup();

    fireEvent.click(button);
    expect(await screen.findByText('My Link')).toBeInTheDocument();

    expect(onClickButtonHandler).not.toHaveBeenCalled();
});

test('Passing the disabled prop as true should disable the button link', () => {
    buttonProps.disabled = true;
    const { button } = setup();
    expect(button).toHaveAttribute('aria-disabled', "true");
});

test('Passing the disabled prop as false should enable the button link', () => {
    buttonProps.disabled = false;
    const { button } = setup();
    expect(button).not.toHaveAttribute('aria-disabled', "true");
});

test('Passing the searchable prop as true should render a search input field', async () => {
    buttonProps.searchable = true;
    const { button } = setup();

    fireEvent.click(button);
    expect(await screen.findByText('My Link')).toBeInTheDocument();

    const field = screen.getByPlaceholderText('Search');
    expect(field).toBeInTheDocument();
});

test('Focusing the search field should expand its height', async () => {
    const { button } = setup();

    fireEvent.click(button);
    expect(await screen.findByText('My Link')).toBeInTheDocument();

    const search = screen.getByPlaceholderText('Search');
    expect(search).toHaveStyle({ 'height': '30px' });
    fireEvent.focus(search);
    expect(search).toHaveStyle({ 'height': '45px' });
});

test('Deleting the search term should collapse the input height again', async () => {
    const { button } = setup();

    // Click on the button to render the menu
    fireEvent.click(button);
    expect(await screen.findByText('My Link')).toBeInTheDocument();

    // Grab the search field and check it's collapsed
    const search = screen.getByPlaceholderText('Search');
    expect(search).toHaveStyle({ 'height': '30px' });

    // Search for something. Focusing will expand it
    fireEvent.focus(search);
    fireEvent.change(search, { target: { value: 'Second' }});
    expect(search).toHaveStyle({ 'height': '45px' });

    // Deleting the search term should collapse it again
    fireEvent.change(search, { target: { value: '' }});
    expect(search).toHaveStyle({ 'height': '30px' });
});

test('Searching an item should filter the results', async () => {
    const { button } = setup();

    fireEvent.click(button);
    expect(await screen.findByText('My Link')).toBeInTheDocument();

    const search = screen.getByPlaceholderText('Search');
    fireEvent.change(search, { target: { value: 'Second' }});

    expect(screen.getByText('My Second Link')).toBeInTheDocument();
    expect(screen.queryByText('My Link')).not.toBeInTheDocument();
});

test('Passing the searchable prop as false should not render a search input field', () => {
    buttonProps.searchable = false;
    expect(screen.queryByPlaceholderText('Search')).not.toBeInTheDocument();
});

test('Clicking outside the drop-down menu should stop rendering it', async () => {
    const { button } = setup();

    // Open the menu
    fireEvent.click(button);
    const menuLink = await screen.findByText('My Link');
    expect(menuLink).toBeInTheDocument();

    // Click outside of the menu
    fireEvent.click(document.body);
    await waitForElementToBeRemoved(menuLink);
});

test('Clicking on a link should call the onClick event handler', async () => {
    const { button } = setup();

    fireEvent.click(button);
    const menuLink = await screen.findByText('My Link');
    expect(menuLink).toBeInTheDocument();

    fireEvent.click(menuLink);
    expect(onClickItemHandler).toHaveBeenCalled();
});

import { fireEvent, screen, waitForElementToBeRemoved } from "@testing-library/react";
import FontSelectorButton from "../../../../components/ui/buttons/FontSelectorButton";
import renderReduxConsumer from "../../../renderReduxConsumer";
import { store } from "../../../../store";

const mockGetSelectedFont = jest.fn();
const mockGetFonts = jest.fn();
jest.mock("../../../../service/FontService", () => {
    return function() { return { getSelectedFont: mockGetSelectedFont, getFonts: mockGetFonts } };
});

beforeEach(() => {
    mockGetSelectedFont.mockResolvedValueOnce({
        displayName: "Handwriting",
        name: "SanafonMugi Handwriting"
    });

    mockGetFonts.mockResolvedValueOnce( [
        { displayName: "Default", name: "" },
        { displayName: "Handwriting", name: "SanafonMugi Handwriting" },
        { displayName: "Gothic", name: "K Gothic" },
        { displayName: "Mincho", name: "Appli Mincho" }
    ]);
});

const setup = () => {
    const component = renderReduxConsumer(<FontSelectorButton />);
    return {
        toggle: component.getByTestId('font-selector'),
        ...component
    }
}

test('Clicking the toggle should render the menu', async () => {
    const { toggle } = setup();
    fireEvent.click(toggle);
    expect(await screen.findByTestId('font-selector')).toBeInTheDocument();
});

test('It should render an option for all available fonts', async () => {
    const { toggle } = setup();

    fireEvent.click(toggle);

    expect(await screen.findByText('Default')).toBeInTheDocument();
    expect(await screen.findByText('Handwriting')).toBeInTheDocument();
    expect(await screen.findByText('Gothic')).toBeInTheDocument();
    expect(await screen.findByText('Mincho')).toBeInTheDocument();
});

test('It should stop rendering the menu when clicking outside of the menu', async () => {
    // Open the font selection menu
    const { toggle } = setup();
    fireEvent.click(toggle);
    const menu = await screen.findByTestId('font-selector-menu');
    expect(menu).toBeInTheDocument();

    // Click outside
    fireEvent.click(document.body);
    await waitForElementToBeRemoved(menu);
});

test('Clicking on a font should set that font in the Redux store', async () => {
    // Open the font selection menu
    const { toggle } = setup();
    fireEvent.click(toggle);
    expect(await screen.findByTestId('font-selector-menu')).toBeInTheDocument();

    // Select a font
    fireEvent.click(screen.getByText("Handwriting"));

    // Should update store
    expect(store.getState().font.selected).toBe("SanafonMugi Handwriting");
});

it("Should set the selected font to an empty string if the service returns undefined", async () => {
    mockGetSelectedFont.mockReset().mockResolvedValueOnce(undefined);
    const { toggle } = setup();
    fireEvent.click(toggle);
    expect(await screen.findByTestId('font-selector-menu')).toBeInTheDocument();
    // TODO: Not sure what we can assert there to confirm "Default" is selected? Check mark icon?
});

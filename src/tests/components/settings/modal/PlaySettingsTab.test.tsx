import PlaySettingsTab from "../../../../components/settings/modal/PlaySettingsTab"
import { fireEvent, screen } from "@testing-library/react"
import renderTranslatedReduxConsumer from "../../../renderTranslatedReduxConsumer"

test("Should render the high scores preference dropdown", async () => {
    const component = renderTranslatedReduxConsumer(<PlaySettingsTab />)

    fireEvent.click(component.getByTestId("play-settings-high-score-selector"))

    // Should render correct options
    expect(await screen.findByText("Ask Each Time"))
    expect(await screen.findByText("Always Submit"))
    expect(await screen.findByText("Never Submit"))
})

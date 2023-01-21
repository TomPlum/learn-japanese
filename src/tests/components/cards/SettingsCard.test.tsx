import SettingsCard from "../../../components/cards/SettingsCard"
import { store } from "../../../store"
import { clearUser, setUser } from "../../../slices/UserSlice"
import { testUser } from "../../../setupTests"
import { fireEvent, screen } from "@testing-library/react"
import renderTranslatedReduxConsumer from "../../renderTranslatedReduxConsumer"

const setup = () => {
    const component = renderTranslatedReduxConsumer(<SettingsCard />)
    return {
        general: component.getByText("General Settings"),
        learn: component.getByText("Learn Settings"),
        play: component.getByText("Play Settings"),
        ui: component.getByText("Interface Settings"),
        notification: component.queryByText("Notification Settings"),
        user: component.queryByText("User Settings"),
        ...component
    }
}

beforeEach(() => {
    store.dispatch(clearUser())
})

test("Should render the correct settings sub-menu links when a user is logged in", () => {
    store.dispatch(setUser(testUser))
    const { general, learn, play, ui, notification, user } = setup()

    expect(general).toBeInTheDocument()
    expect(learn).toBeInTheDocument()
    expect(play).toBeInTheDocument()
    expect(ui).toBeInTheDocument()
    expect(notification).toBeInTheDocument()
    expect(user).toBeInTheDocument()
})

test("Should render the correct settings sub-menu links when a user is not logged in", () => {
    store.dispatch(clearUser())
    const { general, learn, play, ui, notification, user } = setup()

    expect(general).toBeInTheDocument()
    expect(learn).toBeInTheDocument()
    expect(play).toBeInTheDocument()
    expect(ui).toBeInTheDocument()
    expect(notification).not.toBeInTheDocument()
    expect(user).not.toBeInTheDocument()
})

test("Should render the settings modal with the interface tab when clicking the respective link", async () => {
    store.dispatch(setUser(testUser))
    const { ui } = setup()
    fireEvent.click(ui)
    expect(await screen.findByTestId("interface-settings-tab")).toBeInTheDocument()
})

test("Dismissing the settings modal should stop rendering it", async () => {
    store.dispatch(setUser(testUser))
    const { general } = setup()

    fireEvent.click(general)
    expect(await screen.findByTestId("settings-modal")).toBeInTheDocument()

    fireEvent.click(screen.getByTitle("Close"))
    expect(await screen.queryByTestId("settings-modal")).not.toBeInTheDocument()
})

import { screen } from "@testing-library/react"
import Main from "../../../components/layout/Main"
import { Environment } from "../../../utility/Environment"
import { createBrowserHistory } from "history"
import { BrowserRouter } from "react-router-dom"
import renderTranslatedReduxConsumer from "../../renderTranslatedReduxConsumer"

//Mock scrollIntoView() as it doesn't exist in JSDom
const scrollIntoView = jest.fn()
window.HTMLElement.prototype.scrollIntoView = scrollIntoView

const setup = () => {
    renderTranslatedReduxConsumer(
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    )
}

beforeEach(() => {
    const mockEnvironment = jest.fn()
    mockEnvironment.mockReturnValueOnce("/example-base-path/")
    mockEnvironment.mockReturnValueOnce("landing page description")
    Environment.variable = mockEnvironment
})

test("Navigating to the root URI should route to the Landing page", async () => {
    createBrowserHistory().push("/example-base-path/")
    setup()
    expect(await screen.findByTestId("landing-page")).toBeInTheDocument()
})

test("Navigating to the /home should route to the home page", async () => {
    createBrowserHistory().push("/example-base-path/home")
    setup()
    expect(await screen.findByTestId("home-page")).toBeInTheDocument()
})

test("Navigating to the /search should route to the Search page", async () => {
    createBrowserHistory().push("/example-base-path/search")
    setup()
    expect(await screen.findByTestId("search-page")).toBeInTheDocument()
})

test("Navigating to the /help should route to the Help page", async () => {
    createBrowserHistory().push("/example-base-path/help")
    setup()
    expect(await screen.findByText("Frequently Asked Questions")).toBeInTheDocument()
})

test("Navigating to an unknown URI should route to the Not Found page", async () => {
    createBrowserHistory().push("/example-base-path/nope")
    setup()
    expect(await screen.findByText("Nani!?")).toBeInTheDocument()
})

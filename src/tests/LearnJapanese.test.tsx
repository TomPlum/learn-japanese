import { render, screen } from "@testing-library/react";
import LearnJapanese from "../LearnJapanese";
import { Environment } from "../utility/Environment";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { store } from "../store";

beforeEach(() => {
    Environment.variable = jest.fn().mockReturnValue("landing page description");
});

test('Should render the landing page layout', async () => {
    createBrowserHistory().push('/example-base-path/');
    render(<BrowserRouter><LearnJapanese store={store} /></BrowserRouter>);
    expect(await screen.findByTestId('landing-page')).toBeInTheDocument();
});

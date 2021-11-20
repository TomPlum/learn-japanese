import { render } from "@testing-library/react";
import KanjiBankPage from "../../../components/pages/KanjiBankPage";

const setup = () => {
    const component = render(<KanjiBankPage />);
    return {
        ...component
    }
}

test.todo("Write the suite :)")


import { render } from "@testing-library/react";
import StreakCard from "../../../components/cards/StreakCard";

test('Should render the custom date card by default', () => {
    const component = render(<StreakCard />);
    expect(component.getByText('Day 474')).toBeInTheDocument();
});

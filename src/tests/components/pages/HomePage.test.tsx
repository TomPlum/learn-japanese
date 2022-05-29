import renderReduxConsumer from "../../renderReduxConsumer";
import HomePage from "../../../components/pages/HomePage";
import { store } from "../../../store";
import { clearUser, setUser } from "../../../slices/UserSlice";
import { testUser } from "../../../setupTests";

const mockGetActivityStreak = jest.fn();
jest.mock("../../../service/UserService", () => {
    return function() {
        return { getActivityStreak: mockGetActivityStreak };
    };
});

beforeEach(() => {
    store.dispatch(clearUser());
});

test('Should render the user dashboard if there is a user logged in', async () => {
    mockGetActivityStreak.mockResolvedValueOnce(10);
    store.dispatch(setUser(testUser));

    const component = renderReduxConsumer(<HomePage />);

    // Wait for the streak card to load since its async
    expect(await component.findByText('Day 10')).toBeInTheDocument();

    expect(component.getByTestId('user-dashboard')).toBeInTheDocument();
    expect(component.queryByTestId('anonymous-dashboard')).not.toBeInTheDocument();
});

test('Should render the anonymous dashboard if there is no user logged in', () => {
    mockGetActivityStreak.mockResolvedValueOnce(10);
    store.dispatch(clearUser());

    const component = renderReduxConsumer(<HomePage />);

    expect(component.getByTestId('anonymous-dashboard')).toBeInTheDocument();
    expect(component.queryByTestId('user-dashboard')).not.toBeInTheDocument();
});

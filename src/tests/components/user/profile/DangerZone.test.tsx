import { fireEvent, render } from "@testing-library/react";
import DangerZone from "../../../../components/user/profile/DangerZone";

const setup = () => {
    const component = render(<DangerZone />);
    return {
        lock: component.getByTitle('Un-Lock'),
        clearLocalStorage: component.getByText('Clear'),
        resetHighScores: component.getByText('Reset'),
        deleteAccount: component.getByText('Delete'),
        ...component
    }
}

test('Clicking the lock should enable the clear local storage button', () => {
    const { lock, clearLocalStorage } = setup();
    expect(clearLocalStorage).toBeDisabled();
    fireEvent.click(lock);
    expect(clearLocalStorage).not.toBeDisabled();
});

test('Clicking the lock should enable the clear reset high-scores button', () => {
    const { lock, resetHighScores } = setup();
    expect(resetHighScores).toBeDisabled();
    fireEvent.click(lock);
    expect(resetHighScores).not.toBeDisabled();
});

test('Clicking the lock should enable the clear delete account button', () => {
    const { lock, deleteAccount } = setup();
    expect(deleteAccount).toBeDisabled();
    fireEvent.click(lock);
    expect(deleteAccount).not.toBeDisabled();
});

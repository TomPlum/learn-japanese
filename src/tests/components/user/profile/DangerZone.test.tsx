import { fireEvent, render } from "@testing-library/react";
import DangerZone from "../../../../components/user/profile/DangerZone";

const setup = () => {
    const component = render(<DangerZone />);
    return {
        lock: component.getByTitle('Un-Lock'),
        clearLocalStorage: component.getByText('Clear'),
        resetHighScores: component.getAllByText('Reset')[0],
        resetStats: component.getAllByText('Reset')[1],
        resetFlashCards: component.getAllByText('Reset')[2],
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

test('Clicking the lock should enable the reset high-scores button', () => {
    const { lock, resetHighScores } = setup();
    expect(resetHighScores).toBeDisabled();
    fireEvent.click(lock);
    expect(resetHighScores).not.toBeDisabled();
});

test('Clicking the lock should enable the reset stats button', () => {
    const { lock, resetStats } = setup();
    expect(resetStats).toBeDisabled();
    fireEvent.click(lock);
    expect(resetStats).not.toBeDisabled();
});

test('Clicking the lock should enable the reset flash cards button', () => {
    const { lock, resetFlashCards } = setup();
    expect(resetFlashCards).toBeDisabled();
    fireEvent.click(lock);
    expect(resetFlashCards).not.toBeDisabled();
});

test('Clicking the lock should enable the delete account button', () => {
    const { lock, deleteAccount } = setup();
    expect(deleteAccount).toBeDisabled();
    fireEvent.click(lock);
    expect(deleteAccount).not.toBeDisabled();
});

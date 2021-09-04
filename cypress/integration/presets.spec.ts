describe('Hiragana & Katakana', () => {
    it('Relaxed', () => startPresetAndQuit('Relaxed'));
    it('Time Attack', () => startPresetAndQuit('Time Attack'));
    it('Rōmaji', () => startPresetAndQuit('Rōmaji'));
    it('Kana', () => startPresetAndQuit('Kana'));
    it('Match', () => startPresetAndQuit('Match'));
    it('Hardcore', () => startPresetAndQuit('Hardcore'));
});
describe('Numbers & Counting', () => {
    const topic = 'Numbers & Counting';
    it('Numbers', () => startPresetAndQuit('Numbers', topic));
    it('Counters', () => startPresetAndQuit('Counters', topic));
    it('Age', () => startPresetAndQuit('Age', topic));
    it('Exceptions', () => startPresetAndQuit('Exceptions', topic));
    it('Units', () => startPresetAndQuit('Units', topic));
    it('Sequence', () => startPresetAndQuit('Sequence', topic));
});
describe('Jōyō Kanji', () => {
    const topic = 'Jōyō Kanji';
    it('Kanji', () => startPresetAndQuit('Kanji', topic));
    it('Meaning', () => startPresetAndQuit('Meaning', topic));
    it('On\'yomi', () => startPresetAndQuit('On\'yomi', topic));
    it('Kun\'yomi', () => startPresetAndQuit('Kun\'yomi', topic));
    it('Match', () => startPresetAndQuit('Match', topic));
    it('Random', () => startPresetAndQuit('Random', topic));
});
describe('Basics', () => {
    const topic = 'Basics';
    it('Colours', () => startPresetAndQuit('Colours', topic));
    it('Animals', () => startPresetAndQuit('Animals', topic));
    it('Directions', () => startPresetAndQuit('Directions', topic));
    it('Weather', () => startPresetAndQuit('Weather', topic));
    it('Family', () => startPresetAndQuit('Family', topic));
    it('Body', () => startPresetAndQuit('Body', topic));
});
describe('Days & Months', () => {
    const topic = 'Days & Months';
    it('Days of the Week', () => startPresetAndQuit('Days of the Week', topic));
    it('Months of the Year', () => startPresetAndQuit('Months of the Year', topic));
    it('Temporal Nouns', () => startPresetAndQuit('Temporal Nouns', topic));
    it('Seasonal', () => startPresetAndQuit('Seasonal', topic));
    it('Common Phrases', () => startPresetAndQuit('Common Phrases', topic));
    it('Everything', () => startPresetAndQuit('Everything', topic));
});
describe('Sentence Structure', () => {
    const topic = 'Sentence Structure';
    it('Japanese', () => startPresetAndQuit('Japanese', topic));
    it('Meaning', () => startPresetAndQuit('Meaning', topic));
    it('Placeholder 3', () => startPresetAndQuit('Placeholder 3', topic));
    it('Placeholder 4', () => startPresetAndQuit('Placeholder 4', topic));
    it('Placeholder 5', () => startPresetAndQuit('Placeholder 5 ', topic));
    it('Placeholder 6', () => startPresetAndQuit('Placeholder 6 ', topic));
});


function startPresetAndQuit(presetName: string, topicName?: string) {
    cy.visit('https://tomplum.github.io/learn-japanese/#/');
    cy.class('buttonContainer').contains('Play').click();
    cy.url().should('include', '/menu/play');
    if(topicName) cy.contains(topicName).click();
    cy.contains(presetName).click();
    cy.contains('Start').click();
    cy.class('QuitButton_icon').click();
    cy.class('ConfirmModal_yes').click();
    cy.contains('Finish').click();
}
import {Numbers} from "../../src/utility/Numbers";
import {Topic} from "../support/Topic";

describe('Hiragana & Katakana', () => {
    it('Relaxed', () => cy.startAndQuit('Relaxed'));
    it('Time Attack', () => cy.startAndQuit('Time Attack'));
    it('Rōmaji', () => cy.startAndQuit('Rōmaji'));
    it('Kana', () => cy.startAndQuit('Kana'));
    it('Match', () => cy.startAndQuit('Match'));
    it('Hardcore', () => cy.startAndQuit('Hardcore'));
});

describe('Numbers & Counting', () => {
    const topic = Topic.NUMBERS;
    it('Numbers', () => cy.startAndQuit('Numbers', topic));
    it('Counters', () => cy.startAndQuit('Counters', topic));
    it.skip('Age', () => cy.startAndQuit('Age', topic));
    it.skip('Exceptions', () => cy.startAndQuit('Exceptions', topic));
    it.skip('Units', () => cy.startAndQuit('Units', topic));
    it.skip('Sequence', () => cy.startAndQuit('Sequence', topic));
});

describe('Jōyō Kanji', () => {
    const topic = Topic.KANJI;
    it('Kanji', () => cy.startAndQuit('Kanji', topic));
    it('Meaning', () => cy.startAndQuit('Meaning', topic));
    it('On\'yomi', () => cy.startAndQuit('On\'yomi', topic));
    it('Kun\'yomi', () => cy.startAndQuit('Kun\'yomi', topic));
    it('Match', () => cy.startAndQuit('Match', topic));
    it('Random', () => cy.startAndQuit('Random', topic));
});

describe('Basics', () => {
    const topic = Topic.BASICS;
    it('Colours', () => cy.startAndQuit('Colours', topic));
    it.skip('Animals', () => cy.startAndQuit('Animals', topic));
    it.skip('Directions', () => cy.startAndQuit('Directions', topic));
    it.skip('Weather', () => cy.startAndQuit('Weather', topic));
    it.skip('Family', () => cy.startAndQuit('Family', topic));
    it.skip('Body', () => cy.startAndQuit('Body', topic));
});

describe('Days & Months', () => {
    const topic = Topic.DAYS;
    it('Days of the Week', () => cy.startAndQuit('Days of the Week', topic));
    it('Months of the Year', () => cy.startAndQuit('Months of the Year', topic));
    it('Temporal Nouns', () => cy.startAndQuit('Temporal Nouns', topic));
    it.skip('Seasonal', () => cy.startAndQuit('Seasonal', topic));
    it('Common Phrases', () => cy.startAndQuit('Common Phrases', topic));
    it('Everything', () => cy.startAndQuit('Everything', topic));
});

describe('Sentence Structure', () => {
    const topic = Topic.SENTENCE;
    it('Japanese', () => cy.startAndQuit('Japanese', topic));
    it('Meaning', () => cy.startAndQuit('Meaning', topic));
    it.skip('Placeholder 3', () => cy.startAndQuit('Placeholder 3', topic));
    it.skip('Placeholder 4', () => cy.startAndQuit('Placeholder 4', topic));
    it.skip('Placeholder 5', () => cy.startAndQuit('Placeholder 5 ', topic));
    it.skip('Placeholder 6', () => cy.startAndQuit('Placeholder 6 ', topic));
});
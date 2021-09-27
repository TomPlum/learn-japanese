import {Topic} from "../support/Topic";
import hiragana from "../../src/data/Hiragana";
import katakana from "../../src/data/Katakana";

it.skip('Completes a full game of the Rōmaji preset', () => {

    //Navigates to Joyo Kanji topic preset selection screen and starts the Rōmaji game
    cy.navigateToMenu();
    cy.selectTopic('Rōmaji');
    cy.contains('Start').click();

    //Sets answer to all kana data and types in the correct answer and submits answer until game is finished.
    for (let i = 0; i < 214; i++) {
        cy.class('QuestionDisplay_question').then((value: any) => {
            const answer = hiragana().concat(katakana()).find(kana => kana.name == value.text())
            if (answer) {
                cy.get('input[placeholder=Rōmaji').type(answer.romaji[0])
            }
            cy.class('SubmitButton_button').click()
        })
    }



});

it.skip('Check that lives are working correctly', () => {

    //Navigates to Joyo Kanji topic preset selection screen and starts the Rōmaji game
    cy.navigateToMenu();
    cy.selectTopic('Rōmaji');
    cy.contains('Start').click();

    //Gets number of lives, types in an incorrect answer into the answer box and submits the wrong answer
    cy.get('input[placeholder=Rōmaji').type('Tomiscringe')
    cy.class('SubmitButton_button').click()

    //Checks that the number of lives has gone from 5 to 4
    cy.class('LifeDisplay_quantity').contains(4)
});

it('Check that the game ends when you have zero lives', () => {

    //Navigates to Joyo Kanji topic preset selection screen and starts the Rōmaji game
    cy.navigateToMenu();
    cy.selectTopic('Rōmaji');
    cy.contains('Start').click();

    for (let i = 0; i < 5; i++) {
        //Gets number of lives, types in an incorrect answer into the answer box and submits the wrong answer
        cy.get('input[placeholder=Rōmaji').type('Tomiscringe')
        cy.class('SubmitButton_button').click()
    }
    cy.contains('Oh no! You ran out of lives!')
});
/**
 * A rating between 0 and 6 that describes how confident a user was in
 * answering a memory question. The value is consumed by the SM2 algorithm
 * to determine when a question should next be asked to that user.
 */
export enum Confidence {
    /**
     * A complete blackout. The user had absolutely no idea.
     */
    BLACKOUT = 0,

    /**
     * The user gave an incorrect response but they realised they did know it
     * after revealing the answer.
     */
    INCORRECT_BUT_REMEMBERED = 1,

    /**
     * The user gave an incorrect response but they kicked themselves afterwards
     * because it seems so obvious after revealing the answer.
     */
    INCORRECT_OBVIOUS_AFTERWARDS = 2,

    /**
     * The user gave a correct response but had serious difficulty remembering
     * the answer.
     */
    CORRECT_DIFFICULT_MEMORY = 3,

    /**
     * The user gave a correct response after some hesitation.
     */
    CORRECT_SMALL_HESITATION = 4,

    /**
     * The user gave a correct response.
     * Everything was remembered perfectly without hesitation.
     */
    PERFECT = 5
}

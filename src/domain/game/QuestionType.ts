class QuestionType {

    private readonly _name: string;

    private constructor(name: string) {
        this._name = name;
    }

    public static fromName(name: string): QuestionType {
        switch (name) {
            case "Text": return QuestionType.TEXT;
            case "Multiple Choice": return QuestionType.CHOICE;
            case "Audio": return QuestionType.AUDIO;
            case "Match": return QuestionType.MATCH;
            case "Random": return QuestionType.RANDOM;
            default: throw new Error(`Invalid QuestionType [${name}]`)
        }
    }

    public static TEXT = new QuestionType("Text");
    public static CHOICE = new QuestionType("Multiple Choice");
    public static AUDIO = new QuestionType("Audio");
    public static MATCH = new QuestionType("Match");
    public static RANDOM = new QuestionType("Random");

    get name(): string {
        return this._name;
    }
}

export default QuestionType;

class QuestionType {
    private readonly _name: string

    private constructor(name: string) {
        this._name = name
    }

    public static fromName(name: string): QuestionType {
        switch (name) {
            case "text":
                return QuestionType.TEXT
            case "choice":
                return QuestionType.CHOICE
            case "audio":
                return QuestionType.AUDIO
            case "match":
                return QuestionType.MATCH
            case "random":
                return QuestionType.RANDOM
            default:
                throw new Error(`Invalid QuestionType [${name}]`)
        }
    }

    public static TEXT = new QuestionType("text")
    public static CHOICE = new QuestionType("choice")
    public static AUDIO = new QuestionType("audio")
    public static MATCH = new QuestionType("match")
    public static RANDOM = new QuestionType("random")

    get name(): string {
        return this._name
    }
}

export default QuestionType

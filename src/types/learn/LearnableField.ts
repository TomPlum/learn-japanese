export default class LearnableField {

    private readonly _name: string;
    private readonly _description: string;
    private readonly _validationRegex: RegExp;

    public static MEANING = new LearnableField("English Meaning", "Enter one of the meanings as a single English word.", /^[A-Za-z\s]*$/);
    public static KANJI = new LearnableField("Kanji", "Select the kanji character that matches.", /.*/);
    public static KANA = new LearnableField("Kana", "", /^[A-Za-z]+$/);
    public static JAPANESE = new LearnableField("Japanese", "Enter the Japanese for the given thing. This could be kanji and/or kana.", /^[A-Za-z]*$/)
    public static ROMAJI = new LearnableField("Rōmaji", "Enter the roman characters for the given kana. I.e. 'a', 'ke' or 'zu'.", /^[A-Za-z]*$/);
    public static ONYOMI_READING = new LearnableField("On'Yomi Reading", "Enter the original Chinese reading", /^[A-Za-z]*$/);
    public static KUNYOMI_READING = new LearnableField("Kun'Yomi Reading", "Enter the Japanese reading", /^[A-Za-z]*$/);
    public static RANDOM = new LearnableField("Random", "", /.*/);

    private constructor(name: string, description: string, validationRegex: RegExp) {
        this._name = name;
        this._description = description;
        this._validationRegex = validationRegex;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get validationRegex(): RegExp {
        return this._validationRegex;
    }
}
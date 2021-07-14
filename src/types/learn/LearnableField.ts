export default class LearnableField {

    private readonly _name: string;
    private readonly _description: string;

    private constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    public static MEANING = new LearnableField("English Meaning", "Enter one of the meanings as a single English word.");
    public static KANJI = new LearnableField("Kanji", "Select the kanji character that matches.");
    public static KANA = new LearnableField("Kana", "");
    public static ROMAJI = new LearnableField("Rōmaji", "Enter the roman characters for the given kana. I.e. 'a', 'ke' or 'zu'.");
    public static RANDOM = new LearnableField("Random", "");

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }
}
export default class LearnableField {

    private readonly _translationPrefix = "learnable.field"

    private readonly _translationSuffix: string;
    private readonly _validationRegex: RegExp;

    public static MEANING = new LearnableField("meaning" ,/^[A-Za-z\s]*$/);
    public static KANJI = new LearnableField("kanji", /^[一-龯]*$/);
    public static KANA = new LearnableField("kana", /^[ぁ-んァ-ン]+$/);
    public static JAPANESE = new LearnableField("japanese", /^[A-Za-z]*$/)
    public static ROMAJI = new LearnableField("romaji", /^[A-Za-z]*$/);
    public static ONYOMI_READING = new LearnableField("on", /^[ぁ-ゔゞァ-・ヽヾ゛゜ー]+$/);
    public static KUNYOMI_READING = new LearnableField("kun", /^[ぁ-ゔゞァ-・ヽヾ゛゜ー]+$/);
    public static RANDOM = new LearnableField("random", /.*/);

    private constructor(translationSuffix: string, validationRegex: RegExp) {
        this._translationSuffix = translationSuffix;
        this._validationRegex = validationRegex;
    }

    public static values(): LearnableField[] {
        return [
            LearnableField.MEANING, LearnableField.KANJI, LearnableField.KANA,
            LearnableField.JAPANESE, LearnableField.ROMAJI, LearnableField.ONYOMI_READING,
            LearnableField.KUNYOMI_READING, LearnableField.RANDOM
        ];
    }

    public static fromTranslationPath(value: string): LearnableField {
        switch (value) {
            case "learnable.field.meaning.name": return LearnableField.MEANING;
            case "learnable.field.kanji.name": return LearnableField.KANJI;
            case "learnable.field.kana.name": return LearnableField.KANA;
            case "learnable.field.japanese.name": return LearnableField.JAPANESE;
            case "learnable.field.romaji.name": return LearnableField.ROMAJI;
            case "learnable.field.on.name": return LearnableField.ONYOMI_READING;
            case "learnable.field.kun.name": return LearnableField.KUNYOMI_READING;
            case "learnable.field.random.name": return LearnableField.RANDOM;
            default: throw new Error("Invalid Learnable Field Translation Path: " + value);
        }
    }

    get name(): string {
        return `${this._translationPrefix}.${this._translationSuffix}.name`;
    }

    get description(): string {
        return `${this._translationPrefix}.${this._translationSuffix}.desc`;
    }

    get validationRegex(): RegExp {
        return this._validationRegex;
    }
}

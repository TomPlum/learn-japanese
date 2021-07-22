export default class LearnableField {

    private readonly _name: string;
    private readonly _description: string;
    private readonly _validationRegex: RegExp;

    public static MEANING = new LearnableField("English Meaning", "The meaning of the word or character in English. Usually a single word.", /^[A-Za-z\s]*$/);
    public static KANJI = new LearnableField("Kanji", "Some words can be expressed as a single Kanji.", /^[一-龯]*$/);
    public static KANA = new LearnableField("Kana", "The Japanese syllabaries are kana. All words can expressed in Hiragana or Katakana.", /^[ぁ-んァ-ン]+$/);
    public static JAPANESE = new LearnableField("Japanese", "Some words can be expressed in all kanji or a mixture of kanji and kana.", /^[A-Za-z]*$/)
    public static ROMAJI = new LearnableField("Rōmaji", "The romanisation of Japanese kana. I.e. 'a', 'ke' or 'zu'.", /^[A-Za-z]*$/);
    public static ONYOMI_READING = new LearnableField("On'Yomi Reading", "The original Chinese readings of a kanji character in Hiragana.", /^[ぁ-んァ-ン]+$/);
    public static KUNYOMI_READING = new LearnableField("Kun'Yomi Reading", "The Japanese readings of a kanji character in Hiragana.", /^[ぁ-んァ-ン]+$/);
    public static RANDOM = new LearnableField("Random", "A random selection of any of the available data fields.", /.*/);

    private constructor(name: string, description: string, validationRegex: RegExp) {
        this._name = name;
        this._description = description;
        this._validationRegex = validationRegex;
    }

    public static values(): LearnableField[] {
        return [
            LearnableField.MEANING, LearnableField.KANJI, LearnableField.KANA,
            LearnableField.JAPANESE, LearnableField.ROMAJI, LearnableField.ONYOMI_READING,
            LearnableField.KUNYOMI_READING, LearnableField.RANDOM
        ];
    }

    public static fromNameString(value: String): LearnableField {
        switch (value) {
            case "English Meaning": return LearnableField.MEANING;
            case "Kanji": return LearnableField.KANJI;
            case "Kana": return LearnableField.KANA;
            case "Japanese": return LearnableField.JAPANESE;
            case "Rōmaji": return LearnableField.ROMAJI;
            case "On'Yomi Reading": return LearnableField.ONYOMI_READING;
            case "Kun'Yomi Reading": return LearnableField.KUNYOMI_READING;
            case "Random": return LearnableField.RANDOM;
            default: throw new Error("Invalid Learnable Field Name: " + value);
        }
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

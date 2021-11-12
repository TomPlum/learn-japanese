import KanjiConverter from "../../converter/KanjiConverter";
import { KanjiResponseModel } from "../../repository/KanjiRepository";
import { ReadingType } from "../../domain/kanji/ReadingType";
import { KanjiReading } from "../../domain/kanji/KanjiReading";
import { KyoikuGrade } from "../../domain/kanji/KyoikuGrade";
import { Example } from "../../domain/kanji/Example";

describe("Kanji Converter", () => {

    const converter = new KanjiConverter();

    const source: KanjiResponseModel = {
        character: "幹",
        grade: 5,
        strokes: 13,
        jlpt: 1,
        source: undefined,
        meanings: ["talent", "main part", "tree trunk"],
        readings: [{ value: "みき", type: "kun" }, { value: "カン", type: "on" }],
        examples: [],
        tags: []
    }

    it("Should convert the on'yomi readings", () => {
        source.readings = [{ value: "カン", type: "on" }];
        const response = converter.convert([source]);
        expect(response[0].readings).toStrictEqual([new KanjiReading("kan", "カン", ReadingType.ON)]);
    });

    it("Should convert the kun'yomi readings", () => {
        source.readings = [{ value: "みき", type: "kun"}];
        const response = converter.convert([source]);
        expect(response[0].readings).toStrictEqual([new KanjiReading("miki", "みき", ReadingType.KUN)]);
    });

    it("Should convert the grade", () => {
        source.grade = 2;
        const response = converter.convert([source]);
        expect(response[0].grade).toBe(KyoikuGrade.TWO);
    });

    it("Should convert the tags", () => {
        source.tags = ["nature"];
        const response = converter.convert([source]);
        expect(response[0].getTags()).toStrictEqual(["nature"]);
    });

    it("Should convert the source", () => {
        source.source = "some-link"
        const response = converter.convert([source]);
        expect(response[0].source).toBe('some-link');
    });

    it("Should convert the source as an empty string if undefined", () => {
        source.source = undefined;
        const response = converter.convert([source]);
        expect(response[0].source).toBe('');
    });

    it("Should convert the examples", () => {
        source.examples = [{ value: "some-kanji", kana: ["some-kana"], english: ["some-english"] }];
        const response = converter.convert([source]);
        expect(response[0].examples).toStrictEqual([new Example("some-kanji", ["some-kana"], ["some-english"])]);
    });

});

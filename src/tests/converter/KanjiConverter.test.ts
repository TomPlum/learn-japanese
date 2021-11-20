import KanjiConverter from "../../converter/KanjiConverter";
import { KanjiResponseModel } from "../../repository/KanjiRepository";
import { ReadingType } from "../../domain/kanji/ReadingType";
import { KanjiReading } from "../../domain/kanji/KanjiReading";
import { KyoikuGrade } from "../../domain/kanji/KyoikuGrade";
import { Example } from "../../domain/kanji/Example";
import { JLTPLevel } from "../../domain/learn/JLTPLevel";

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

    describe("Japanese Level Proficiency Test Level", () => {
        it("Should convert N1 level", () => {
            source.jlpt = 1;
            const response = converter.convert([source]);
            expect(response[0].jlpt).toBe(JLTPLevel.N1);
        });

        it("Should convert N2 level", () => {
            source.jlpt = 2;
            const response = converter.convert([source]);
            expect(response[0].jlpt).toBe(JLTPLevel.N2);
        });

        it("Should convert N3 level", () => {
            source.jlpt = 3;
            const response = converter.convert([source]);
            expect(response[0].jlpt).toBe(JLTPLevel.N3);
        });

        it("Should convert N4 level", () => {
            source.jlpt = 4;
            const response = converter.convert([source]);
            expect(response[0].jlpt).toBe(JLTPLevel.N4);
        });

        it("Should convert N5 level", () => {
            source.jlpt = 5;
            const response = converter.convert([source]);
            expect(response[0].jlpt).toBe(JLTPLevel.N5);
        });

        it("Should convert an invalid value", () => {
            source.jlpt = 89;
            const response = converter.convert([source]);
            expect(response[0].jlpt).toBe(JLTPLevel.UNKNOWN);
        });
    });

});

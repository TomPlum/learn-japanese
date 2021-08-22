import { joyo, kyoiku } from "../../data/Kanji";
import { KanjiData, KanjiExample } from "../../data/DataTypes";

//TODO: These are just integration tests this point, do we need then? They're failing with Network Error now.
describe.skip("Kanji Data - Integration Test", () => {
    it("Kyoiku should return only Kyoiku", () => {
        return kyoiku().then(kanji => {
            expect(kanji).toHaveLength(1026)
        });
    });

    it("Joyo should return Joyo & Kyoiku", () => {
        return joyo().then(kanji => expect(kanji).toHaveLength(2136));
    });

    it("Should return exactly 80 Grade 1 Kyoiku Kanji", () => {
       return kyoiku().then(response => {
           const kanji = response.filter((kanji: KanjiData) => kanji.grade === 1)
           expect(kanji).toHaveLength(80);
       });
    });

    it("Should return exactly 160 Grade 2 Kyoiku Kanji", () => {
        return kyoiku().then(response => {
            const kanji = response.filter((kanji: KanjiData) => kanji.grade === 2)
            expect(kanji).toHaveLength(160);
        });
    });

    it("Should return exactly 200 Grade 3 Kyoiku Kanji", () => {
        return kyoiku().then(response => {
            const kanji = response.filter((kanji: KanjiData) => kanji.grade === 3)
            expect(kanji).toHaveLength(200);
        });
    });

    it("Should return exactly 220 Grade 4 Kyoiku Kanji", () => {
        return kyoiku().then(response => {
            const kanji = response.filter((kanji: KanjiData) => kanji.grade === 4)
            expect(kanji).toHaveLength(220);
        });
    });

    it("Should return exactly 185 Grade 5 Kyoiku Kanji", () => {
        return kyoiku().then(response => {
            const kanji = response.filter((kanji: KanjiData) => kanji.grade === 5)
            expect(kanji).toHaveLength(185);
        });
    });

    it("Should return exactly 181 Grade 6 Kyoiku Kanji", () => {
        return kyoiku().then(response => {
            const kanji = response.filter((kanji: KanjiData) => kanji.grade === 6)
            expect(kanji).toHaveLength(181);
        });
    });

    describe("Validation", () => {
        it("Should not contain any kanji that have commas in their meaning arrays", () => {
            return joyo().then(kanji => {
                const invalid = kanji.filter((kanji: KanjiData) => {
                    const hasComma = kanji.meanings.some((meaning: string) => meaning.includes(","))
                    const isEmpty = kanji.meanings.some((meaning: string) => !meaning);
                    return hasComma || isEmpty;
                });

                if (invalid.length > 0) {
                    console.log(invalid.length + " Kanji failed meanings validation. These were:\n");
                    invalid.forEach((kanji: KanjiData) => {
                        console.log(kanji.name + " -> " + kanji.meanings);
                    });
                }

                expect(invalid).toHaveLength(0);
            });
        });

        it("Should not return any duplicate unicode values", () => {
            return joyo().then(response => {
                const kanji = response.map((kanji: KanjiData) => kanji.name);
                const unique = new Set(kanji);
                expect(kanji.length).toBe(unique.size);
            });
        });

        it("Should not contain any kanji that have missing example kanji", () => {
            return joyo().then(kanji => {
                const invalid = kanji.filter((kanji: KanjiData) => {
                    return kanji.examples.some((example: KanjiExample) => !example.value);
                });

                if (invalid.length > 0) {
                    console.log(invalid.length + " Kanji failed examples kanji validation. These were:\n");
                    invalid.forEach((kanji: KanjiData) => {
                        console.log(kanji.name + " -> " + kanji.examples.filter(it => !it.value).map(it => it.value));
                    });
                }

                expect(invalid).toHaveLength(0);
            });
        });

        it("Should not contain any kanji that have missing example kana", () => {
            return joyo().then(kanji => {
                const invalid = kanji.filter((kanji: KanjiData) => {
                    return kanji.examples.some((example: KanjiExample) => {
                        return example.kana.some((kana: string) => !kana);
                    });
                });

                if (invalid.length > 0) {
                    console.log(invalid.length + " Kanji failed examples kana validation. These were:\n");
                    invalid.forEach((kanji: KanjiData) => {
                        console.log(kanji.name + " -> " + kanji.examples
                            .filter(it => it.kana.filter(it => !it))
                            .map(it => it.english)
                        );
                    });
                }

                expect(invalid).toHaveLength(0);
            });
        });

        it("Should not contain any kanji that have missing example english", () => {
            return joyo().then(kanji => {
                const invalid = kanji.filter((kanji: KanjiData) => {
                    return kanji.examples.some((example: KanjiExample) => {
                        return example.english.some((english: string) => !english);
                    });
                });

                if (invalid.length > 0) {
                    console.log(invalid.length + " Kanji failed examples english validation. These were:\n");
                    invalid.forEach((kanji: KanjiData) => {
                        console.log(kanji.name + " -> " + kanji.examples
                            .filter(it => it.english.filter(it => !it))
                            .map(it => it.kana[0])
                        );
                    });
                }

                expect(invalid).toHaveLength(0);
            });
        });

        it("Should not contain any kanji that have no readings", () => {
            return joyo().then(kanji => {
                const invalid = kanji.filter((kanji: KanjiData) => {
                    return !kanji.on && !kanji.kun;
                });

                if (invalid.length > 0) {
                    console.log(invalid.length + " Kanji failed readings validation. These were:\n");
                    invalid.forEach((kanji: KanjiData) => console.log(kanji.name));
                }

                expect(invalid).toHaveLength(0);
            });
        });

        it.skip("Should not contain any kanji that have no source", () => {
            return joyo().then(kanji => {
                const invalid = kanji.filter((kanji: KanjiData) =>  !kanji.source);

                if (invalid.length > 0) {
                    console.log(invalid.length + " Kanji failed source validation. These were:\n");
                    invalid.forEach((kanji: KanjiData) => console.log(kanji.name));
                }

                expect(invalid).toHaveLength(0);
            });
        });
    });
});

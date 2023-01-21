import SentenceStructureSettings, {
    SentenceStructureSettingsBuilder
} from "../../../../../domain/session/settings/data/SentenceStructureSettings"

describe("Sentence Structure Settings", () => {
    describe("Builder", () => {
        it("Should default to all unselected with undefined quantity", () => {
            const settings = new SentenceStructureSettingsBuilder().build()
            expect(settings).toStrictEqual(
                new SentenceStructureSettings(false, false, false, false, false, false, undefined)
            )
        })

        it("Should set adverbs to true when specifying but not passing any arg", () => {
            const settings = new SentenceStructureSettingsBuilder().withAdverbs().build()
            expect(settings.adverbs).toBe(true)
        })

        it("Should set adverbs to false when specifying", () => {
            const settings = new SentenceStructureSettingsBuilder().withAdverbs(false).build()
            expect(settings.adverbs).toBe(false)
        })

        it("Should set particles to true when specifying but not passing any arg", () => {
            const settings = new SentenceStructureSettingsBuilder().withParticles().build()
            expect(settings.particles).toBe(true)
        })

        it("Should set particles to false when specifying", () => {
            const settings = new SentenceStructureSettingsBuilder().withParticles(false).build()
            expect(settings.particles).toBe(false)
        })

        it("Should set expressions to true when specifying but not passing any arg", () => {
            const settings = new SentenceStructureSettingsBuilder().withExpressions().build()
            expect(settings.expressions).toBe(true)
        })

        it("Should set expressions to false when specifying", () => {
            const settings = new SentenceStructureSettingsBuilder().withExpressions(false).build()
            expect(settings.expressions).toBe(false)
        })

        it("Should set verbs to true when specifying but not passing any arg", () => {
            const settings = new SentenceStructureSettingsBuilder().withVerbs().build()
            expect(settings.verbs).toBe(true)
        })

        it("Should set verbs to false when specifying", () => {
            const settings = new SentenceStructureSettingsBuilder().withVerbs(false).build()
            expect(settings.verbs).toBe(false)
        })

        it("Should set nouns to true when specifying but not passing any arg", () => {
            const settings = new SentenceStructureSettingsBuilder().withNouns().build()
            expect(settings.nouns).toBe(true)
        })

        it("Should set nouns to false when specifying", () => {
            const settings = new SentenceStructureSettingsBuilder().withNouns(false).build()
            expect(settings.nouns).toBe(false)
        })

        it("Should set adjectives to true when specifying but not passing any arg", () => {
            const settings = new SentenceStructureSettingsBuilder().withAdjectives().build()
            expect(settings.adjectives).toBe(true)
        })

        it("Should set adjectives to false when specifying", () => {
            const settings = new SentenceStructureSettingsBuilder().withAdjectives(false).build()
            expect(settings.adjectives).toBe(false)
        })

        it("Should set quantity when specifying", () => {
            const settings = new SentenceStructureSettingsBuilder().withQuantity(56).build()
            expect(settings.quantity).toBe(56)
        })
    })
})

import Repository from "./Repository"
import { adjectives, adverbs, expressions, verbs } from "../data/SentenceStructure"
import { AdjectiveData, AdverbData, ExpressionData, SentenceStructureData, VerbData } from "../data/DataTypes"
import Definition from "../domain/sentence/Definition"
import { Learnable } from "../domain/learn/Learnable"
import SentenceStructureSettings from "../domain/session/settings/data/SentenceStructureSettings"

export default class SentenceStructureRepository implements Repository<Learnable> {
    read(settings: SentenceStructureSettings): Promise<Learnable[]> {
        const data = []

        if (settings.adjectives) {
            data.push(...adjectives().map((it: AdjectiveData) => this.convert(it, it.type + " Adjective")))
        }

        if (settings.verbs) {
            data.push(...verbs().map((it: VerbData) => this.convert(it, it.type + " Verb")))
        }

        if (settings.adverbs) {
            data.push(...adverbs().map((it: AdverbData) => this.convert(it, "Adverb")))
        }

        if (settings.expressions) {
            data.push(...expressions().map((it: ExpressionData) => this.convert(it, "Expression")))
        }

        return Promise.all(data)
    }

    private convert(data: SentenceStructureData, title: string): Definition {
        return new Definition(data.meanings, data.kanjiForm, data.kana, title)
    }
}

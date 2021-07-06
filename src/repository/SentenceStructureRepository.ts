import Repository from "./Repository";
import { adjectives, adverbs, expressions, verbs } from "../data/SentenceStructure";
import { AdjectiveData, AdverbData, ExpressionData, SentenceStructureData, VerbData } from "../data/DataTypes";
import Definition from "../types/sentence/Definition";
import { Learnable } from "../types/learn/Learnable";
import SentenceStructureSettings from "../types/session/settings/data/SentenceStructureSettings";

export default class SentenceStructureRepository implements Repository<Learnable> {
    read(settings: SentenceStructureSettings): Learnable[] {

        if (settings.adjectives) {
            return adjectives().map((it: AdjectiveData) => this.convert(it, it.type + " Adjective"));
        }
        
        if (settings.verbs) {
            return verbs().map((it: VerbData) => this.convert(it, it.type + " Verb"));
        }

        if (settings.adverbs) {
            return adverbs().map((it: AdverbData) => new Definition(it.meanings, it.kanjiForm, it.kana, "Adverb"));
        }

        if (settings.expressions) {
            return expressions().map((it: ExpressionData) => new Definition(it.meanings, it.kanjiForm, it.kana, "Expression"));
        }

        return [];
    }

    private convert(data: SentenceStructureData, title: string): Definition {
        return new Definition(data.meanings, data.kanjiForm, data.kana, title);
    }
}
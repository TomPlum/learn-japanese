import Repository from "./Repository";
import { LearnSentenceStructureSettings } from "../types/learn/LearningSessionSettings";
import { adjectives, adverbs, expressions, verbs } from "../data/SentenceStructure";
import { AdjectiveData, AdverbData, ExpressionData, VerbData } from "../data/DataTypes";
import Adjective from "../types/sentence/Adjective";
import Verb from "../types/sentence/Verb";
import Definition from "../types/sentence/Definition";
import { KanjiLearnable } from "../types/learn/Learnable";

export default class SentenceStructureRepository implements Repository<KanjiLearnable> {
    read(settings: LearnSentenceStructureSettings): KanjiLearnable[] {

        if (settings.adjectives) {
            return adjectives().map((it: AdjectiveData) => new Adjective(it.meanings, it.kanjiForm, it.type, it.kana));
        }
        
        if (settings.verbs) {
            return verbs().map((it: VerbData) => new Verb(it.meanings, it.kanjiForm, it.type, it.kana));
        }

        if (settings.adverbs) {
            return adverbs().map((it: AdverbData) => new Definition(it.meanings, it.kanjiForm, it.kana, "Adverb"));
        }

        if (settings.expressions) {
            return expressions().map((it: ExpressionData) => new Definition(it.meanings, it.kanjiForm, it.kana, "Expression"));
        }

        return [];
    }
}
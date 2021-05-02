import Repository from "./Repository";
import { SentenceStructureLearnable } from "../types/learn/CommonLearnable";
import { LearnSentenceStructureSettings } from "../types/learn/LearningSessionSettings";
import { adjectives, verbs } from "../data/SentenceStructure";
import { AdjectiveData, VerbData } from "../data/DataTypes";
import Adjective from "../types/sentence/Adjective";
import Verb from "../types/sentence/Verb";

export default class SentenceStructureRepository implements Repository<SentenceStructureLearnable> {
    read(settings: LearnSentenceStructureSettings): SentenceStructureLearnable[] {

        if (settings.adjectives) {
            return adjectives().map((it: AdjectiveData) => new Adjective(it.meanings, it.kanjiForm, it.type, it.kana));
        }
        
        if (settings.verbs) {
            return verbs().map((it: VerbData) => new Verb(it.meanings, it.kanjiForm, it.type, it.kana));
        }

        return [];
    }
}
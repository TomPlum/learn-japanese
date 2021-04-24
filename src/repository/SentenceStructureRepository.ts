import Repository from "./Repository";
import { SentenceStructureLearnable } from "../types/learn/CommonLearnable";
import { LearnSentenceStructureSettings } from "../types/learn/LearningSessionSettings";
import { adjectives } from "../data/SentenceStructure";
import { AdjectiveData } from "../data/DataTypes";
import Adjective from "../types/sentence/Adjective";

export default class SentenceStructureRepository implements Repository<SentenceStructureLearnable> {
    read(settings: LearnSentenceStructureSettings): SentenceStructureLearnable[] {

        if (settings.adjectives) {
            return adjectives().map((it: AdjectiveData) => new Adjective(it.meanings, it.kanjiForm, it.type, it.kana));
        }

        return [];
    }
}
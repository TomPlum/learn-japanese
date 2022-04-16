import { faComment, faCube, faExclamation, faFire, faRunning } from "@fortawesome/free-solid-svg-icons";
import { LearnMenuModes } from "../../MenuModes";
import LearnMode from "../../session/LearnMode";
import { SentenceStructureSettingsBuilder } from "../../session/settings/data/SentenceStructureSettings";
import LearnSettings from "../../session/settings/LearnSettings";

export default class LearnSentenceStructureModes implements LearnMenuModes {
    getModes(): LearnMode[] {
        const defaultLearnSettings = new LearnSettings();

        return [
            new LearnMode(1, "Adverbs", "#5641d0", faExclamation,
                new SentenceStructureSettingsBuilder().withAdverbs().build(),
                defaultLearnSettings
            ),
            new LearnMode(1, "Particles", "#ff7730", "を",
                new SentenceStructureSettingsBuilder().withParticles().build(),
                defaultLearnSettings
            ),
            new LearnMode(1, "Expressions", "#1785e2", faComment,
                new SentenceStructureSettingsBuilder().withExpressions().build(),
                defaultLearnSettings
            ),
            new LearnMode(1, "Verbs", "#e3c93a", faRunning,
                new SentenceStructureSettingsBuilder().withVerbs().build(),
                defaultLearnSettings
            ),
            new LearnMode(1, "Nouns", "#4fdb4b", faCube,
                new SentenceStructureSettingsBuilder().withNouns().build(),
                defaultLearnSettings
            ),
            new LearnMode(1, "Adjectives", "#fd0e3e", faFire,
                new SentenceStructureSettingsBuilder().withAdjectives().build(),
                defaultLearnSettings
            )
        ];
    }

    getTopic(): string {
        return "SENTENCE";
    }
}

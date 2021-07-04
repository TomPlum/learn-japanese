import { faComment, faCube, faExclamation, faFire, faRunning } from "@fortawesome/free-solid-svg-icons";
import { LearnMenuModes } from "../../MenuModes";
import LearnMode from "../../session/LearnMode";
import { LearnSettings, SentenceStructureSettingsBuilder } from "../../session/DataSettings";

export default class LearnSentenceStructureMode implements LearnMenuModes {
    getModes(): LearnMode[] {
        const defaultLearnSettings = new LearnSettings();

        return [
            new LearnMode("Adverbs", "#5641d0", faExclamation,
                new SentenceStructureSettingsBuilder().withAdverbs().build(),
                defaultLearnSettings
            ),
            new LearnMode("Particles", "#ff7730", "を",
                new SentenceStructureSettingsBuilder().withParticles().build(),
                defaultLearnSettings
            ),
            new LearnMode("Expressions", "#1785e2", faComment,
                new SentenceStructureSettingsBuilder().withExpressions().build(),
                defaultLearnSettings
            ),
            new LearnMode("Verbs", "#e3c93a", faRunning,
                new SentenceStructureSettingsBuilder().withVerbs().build(),
                defaultLearnSettings
            ),
            new LearnMode("Nouns", "#4fdb4b", faCube,
                new SentenceStructureSettingsBuilder().withNouns().build(),
                defaultLearnSettings
            ),
            new LearnMode("Adjectives", "#fd0e3e", faFire,
                new SentenceStructureSettingsBuilder().withAdjectives().build(),
                defaultLearnSettings
            )
        ];
    }

    getTopic(): string {
        return "SENTENCE";
    }
}
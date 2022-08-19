import { Col, Row } from "react-bootstrap";
import styles from "../../../styles/sass/components/settings/data/SentenceStructureForm.module.scss";
import QuantityField from "../../ui/fields/QuantityField";
import ToggleSwitch from "../../ui/ToggleSwitch";
import { useEffect, useState } from "react";
import { DataSettingsStepFormProps } from "../../layout/wizard/steps/DataSettingsStep";
import SentenceStructureSettings, { SentenceStructureSettingsBuilder } from "../../../domain/session/settings/data/SentenceStructureSettings";

const SentenceStructureFormBody = (props: DataSettingsStepFormProps<SentenceStructureSettings>) => {

    const { className, isValid, onChange } = props;

    const [adverbs, setAdverbs] = useState(true);
    const [particles, setParticles] = useState(true);
    const [expressions, setExpressions] = useState(true);
    const [verbs, setVerbs] = useState(true);
    const [nouns, setNouns] = useState(true);
    const [adjectives, setAdjectives] = useState(true);
    const [quantity, setQuantity] = useState(25);

    useEffect(() => {
        const settings = new SentenceStructureSettingsBuilder()
            .withAdverbs(adverbs)
            .withParticles(particles)
            .withExpressions(expressions)
            .withVerbs(verbs)
            .withNouns(nouns)
            .withAdjectives(adjectives)
            .withQuantity(quantity)
            .build();

        onChange(settings);
        isValid?.(validate());
    }, [adverbs, particles, expressions, verbs, nouns, adjectives, quantity]);

    const validate = () => {
        const isQuantityValid = quantity > 0;
        const areTopicsValid = adverbs || particles || expressions || verbs || nouns || adjectives;
        return isQuantityValid && areTopicsValid;
    }

    return (
        <div className={className}>
            <Row className={styles.quantityWrapper}>
                <Col>
                    <QuantityField
                        value={quantity}
                        className={styles.quantity}
                        onChange={(quantity: number) => setQuantity(quantity)}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <ToggleSwitch
                        label="Adverbs"
                        enabled={adverbs}
                        className={styles.switch}
                        data-testid="adverb-switch"
                        onChange={() => setAdverbs(!adverbs)}
                    />

                    <p className={adverbs ? styles.description : styles.disabled}>
                        Adverbs are words or phrases that modify or qualify an adjective, verb, or other adverb or
                        a word group, expressing a relation of place, time, circumstance, manner, cause, degree, etc.
                    </p>

                    <ToggleSwitch
                        label="Particles"
                        enabled={particles}
                        className={styles.switch}
                        data-testid="particles-switch"
                        onChange={() => setParticles(!particles)}
                    />

                    <p className={particles ? styles.description : styles.disabled}>
                        Japanese particles are small words that indicate relations of words within a sentence.
                    </p>

                    <ToggleSwitch
                        label="Expressions"
                        enabled={expressions}
                        className={styles.switch}
                        data-testid="expressions-switch"
                        onChange={() => setExpressions(!expressions)}
                    />

                    <p className={expressions ? styles.description : styles.disabled}>
                        Common expressions used in every-day conversation. Most of these are taken from the
                        "Expressions & Adverbs" section of the vocabulary page in the Genki textbook.
                    </p>

                    <ToggleSwitch
                        label="Verbs"
                        enabled={verbs}
                        className={styles.switch}
                        data-testid="verbs-switch"
                        onChange={() => setVerbs(!verbs)}
                    />

                    <p className={verbs ? styles.description : styles.disabled}>
                        Verbs are words used to describe an action, state, or occurrence, and forming the main
                        part of the predicate of a sentence, such as hear, become, happen.
                    </p>

                    <ToggleSwitch
                        label="Nouns"
                        enabled={nouns}
                        className={styles.switch}
                        data-testid="nouns-switch"
                        onChange={() => setNouns(!nouns)}
                    />

                    <p className={nouns ? styles.description : styles.disabled}>
                        Nouns are words (other than a pronouns) used to identify any of a class of people, places,
                        or things (common noun), or to name a particular one of these (proper noun).
                    </p>

                    <ToggleSwitch
                        label="Adjectives"
                        enabled={adjectives}
                        className={styles.switch}
                        data-testid="adjectives-switch"
                        onChange={() => setAdjectives(!adjectives)}
                    />

                    <p className={adjectives ? styles.description : styles.disabled}>
                        Adjectives are words naming an attribute of a noun, such as sweet, red, or technical.
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default SentenceStructureFormBody

import { Component } from "react";
import DataSettingsMenu, { DataSettingsMenuProps } from "./DataSettingsMenu";
import SentenceStructureSettings, { SentenceStructureSettingsBuilder } from "../../../types/session/settings/data/SentenceStructureSettings";
import { Col, Row } from "react-bootstrap";
import ToggleSwitch from "../../ui/ToggleSwitch";
import styles from "../../../styles/sass/components/settings/data/SentenceStructureForm.module.scss";
import QuantityField from "../../ui/fields/QuantityField";

interface SentenceStructureFormState {
    adverbs: boolean;
    particles: boolean;
    expressions: boolean;
    verbs: boolean;
    nouns: boolean;
    adjectives: boolean;
    quantity: number;
}

class SentenceStructureForm extends Component<DataSettingsMenuProps<SentenceStructureSettings>, SentenceStructureFormState> {

    constructor(props: Readonly<DataSettingsMenuProps<SentenceStructureSettings>> | DataSettingsMenuProps<SentenceStructureSettings>) {
        super(props);
        this.state = {
            adverbs: true,
            particles: true,
            expressions: true,
            verbs: true,
            nouns: true,
            adjectives: true,
            quantity: 25
        }
    }

    render() {
        const { title, icon, onQuit } = this.props;
        const { adverbs, particles, expressions, verbs, nouns, adjectives, quantity } = this.state;

        return (
            <DataSettingsMenu title={title} icon={icon} onQuit={onQuit} onReset={this.reset} onConfirm={this.confirm} isValid={this.validate}>
                <Row className={styles.quantityWrapper}>
                    <Col>
                        <QuantityField
                            value={quantity}
                            className={styles.quantity}
                            onChange={(quantity: number) => this.setState({ quantity: quantity })}
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
                            onChange={() => this.setState({ adverbs: !adverbs })}
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
                            onChange={() => this.setState({ particles: !particles })}
                        />

                        <p className={particles ? styles.description : styles.disabled}>
                            Japanese particles are small words that indicate relations of words within a sentence.
                        </p>

                        <ToggleSwitch
                            label="Expressions"
                            enabled={expressions}
                            className={styles.switch}
                            data-testid="expressions-switch"
                            onChange={() => this.setState({ expressions: !expressions })}
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
                            onChange={() => this.setState({ verbs: !verbs })}
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
                            onChange={() => this.setState({ nouns: !nouns })}
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
                            onChange={() => this.setState({ adjectives: !adjectives })}
                        />

                        <p className={adjectives ? styles.description : styles.disabled}>
                            Adjectives are words naming an attribute of a noun, such as sweet, red, or technical.
                        </p>
                    </Col>
                </Row>
            </DataSettingsMenu>
        );
    }

    private reset = () => {
        this.setState({
            adverbs: true,
            particles: true,
            expressions: true,
            verbs: true,
            nouns: true,
            adjectives: true,
            quantity: 25
        });
        this.props.onReset();
    }

    private confirm = () => {
        const { adverbs, particles, expressions, verbs, nouns, adjectives, quantity } = this.state;

        const settings = new SentenceStructureSettingsBuilder()
            .withAdverbs(adverbs)
            .withParticles(particles)
            .withExpressions(expressions)
            .withVerbs(verbs)
            .withNouns(nouns)
            .withAdjectives(adjectives)
            .withQuantity(quantity)
            .build();

        this.props.onConfirm(settings);
    }

    private validate = () => {
        const { adverbs, particles, expressions, verbs, nouns, adjectives, quantity } = this.state;
        const isQuantityValid = quantity > 0;
        const areTopicsValid = adverbs || particles || expressions || verbs || nouns || adjectives;
        return isQuantityValid && areTopicsValid;
    }
}

export default SentenceStructureForm;

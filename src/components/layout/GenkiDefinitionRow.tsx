import GenkiDefinition from "../../domain/learn/GenkiDefinition";
import { Accordion, Card } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/GenkiDefinitionRow.module.scss";

export interface GenkiDefinitionsRowProps {
    definition: GenkiDefinition;
}

const GenkiDefinitionRow = (props: GenkiDefinitionsRowProps) => {

    const definition = props.definition;
    const colourClass = definition.getLesson() < 12 ? styles.genkiOne : styles.genkiTwo;

    const kanji = definition.getKanjiVariation();

    return (
        <Card className={colourClass}>
            <Card.Header as={Card.Header}>
                <span>{definition.getMeanings()[0]}</span>
                <span className={styles.lesson}>{`Lesson ${definition.getLesson()}`}</span>
            </Card.Header>

            <Card.Body>
                <p>{`Kana ${definition.getKana()[0]}`}</p>
                <p>{kanji ?? "This definition has no kanji variation."}</p>
            </Card.Body>
        </Card>
    );
}

export default GenkiDefinitionRow;

import styles from "../../../styles/sass/components/ui/display/GenkiRelativePsychologyCircle.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import GenkiStructureDisplay from "./GenkiStructureDisplay";

export interface GenkiRelativePsychologyCircleProps {
    verb: string;
    relationship: string;
    situations: string[];
}

const GenkiRelativePsychologyCircle = (props: GenkiRelativePsychologyCircleProps) => {
    const { verb, relationship, situations } = props;

    return (
        <GenkiStructureDisplay book={2} className={styles.wrapper}>
            <Container className={styles.container}>
                <Row noGutters className={styles.row}>
                    <Col xs={5} className={styles.col}>
                        <strong className={styles.verb}>{verb}</strong>
                        <p className={styles.relationship}>{relationship}</p>
                    </Col>
                    <Col>
                        {situations.map(situation => {
                            return (
                                <p className={styles.situation} key={situation}>
                                    {situation}
                                </p>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </GenkiStructureDisplay>
    );
}

export default GenkiRelativePsychologyCircle;

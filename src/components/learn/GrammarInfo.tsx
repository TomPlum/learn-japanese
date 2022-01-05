import JLTPLevel from "../../domain/learn/JLTPLevel";
import { Col, Container, Row } from "react-bootstrap";

export interface GrammarInfoProps {
    title: string;
    body: Element | JSX.Element | string;
    chapter?: number;
    level?: JLTPLevel;
}

const GrammarInfo = (props: GrammarInfoProps) => {
    return (
        <Container>
            <Row>
                {props.level && <Col xs={2}>{props.level.value}</Col>}
                <Col>{props.title}</Col>
            </Row>
            <Row>
                <Col>{props.body}</Col>
            </Row>
        </Container>
    );
}

export default GrammarInfo;

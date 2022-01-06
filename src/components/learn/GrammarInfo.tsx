import { Accordion, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/sass/components/learn/GrammarInfo.module.scss";
import PageNumber from "../../domain/learn/PageNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faChevronDown, faChevronUp, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export interface GrammarInfoProps {
    title: string;
    body: Element | JSX.Element | string;
    chapter: number;
    page?: PageNumber;
}

const GrammarInfo = (props: GrammarInfoProps) => {

    const { title, body, chapter, page } = props;

    const [expanded, setExpanded] = useState(false);

    const iconClassName = [(chapter <= 12 ? styles.genki1 : styles.genki2), styles.icon].join(" ");
    const headerStyle = !expanded ? { borderRadius: 10 } : { borderRadius: "10px 10px 0 0" };

    return (
        <Accordion>
            <Container className={styles.wrapper}>
                <Row className={styles.header} style={headerStyle}>
                    <Col className={styles.chapter}>
                    <span className="fa-layers fa-fw">
                        <FontAwesomeIcon icon={faBookmark} size="2x" className={iconClassName} />
                        <span className="fa-layers-text fa-inverse" data-fa-transform="shrink-8 down-3">
                            {chapter}
                        </span>
                    </span>
                    </Col>

                    <Col className={styles.title}>
                        {title}
                    </Col>

                    <Col>
                        <Accordion.Toggle
                            fixedWidth
                            eventKey={title}
                            as={FontAwesomeIcon}
                            className={styles.expander}
                            onClick={() => setExpanded(!expanded)}
                            icon={expanded ? faChevronUp : faChevronDown}
                        />
                    </Col>
                </Row>

                <Accordion.Collapse eventKey={title}>
                    <Container className={styles.body}>
                        <Row>
                            <Col>
                                <span>
                                    {body}
                                </span>
                            </Col>
                        </Row>

                        <Row className={styles.footer}>
                            <Col>
                                <FontAwesomeIcon icon={faFileAlt} fixedWidth />
                                <span className={styles.page}>{page?.toString()}</span>
                            </Col>
                        </Row>
                    </Container>
                </Accordion.Collapse>
            </Container>
        </Accordion>
    );
}

export default GrammarInfo;

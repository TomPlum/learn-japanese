import React, { Component } from "react";
import ScrollableContainer from "../../ui/ScrollableContainer";
import { Button, Card, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck, faUndo, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import DataSettings from "../../../types/session/settings/data/DataSettings";
import styles from "../../../styles/sass/components/settings/data/DataSettingsMenu.module.scss";

export interface DataSettingsMenuProps<T extends DataSettings> {
    title: string;
    icon: IconDefinition
    onQuit: () => void;
    onReset: () => void;
    isValid?: () => boolean;
    onConfirm: (settings: T) => void;
}

class DataSettingsMenu extends Component<DataSettingsMenuProps<any>> {
    render() {
        const { title, icon, children, onQuit, onReset, onConfirm, isValid } = this.props;

        return (
            <div className={styles.wrapper}>
                <Card bg="dark" className={[styles.card, "mb-2"].join(" ")}>
                    <p className={styles.title}>
                        <FontAwesomeIcon icon={icon} className={styles.icon} fixedWidth />
                        <span>{title} Settings</span>
                    </p>

                    <ScrollableContainer className={styles.scrollable}>
                        {children}
                    </ScrollableContainer>

                    {/*TODO: Pull this out into component?*/}
                    <Card.Footer className={styles.footer}>
                        <Form.Row>
                            <Col className={styles.noGuttersLeft}>
                                <Button variant="danger" block onClick={onQuit} className={styles.button}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                    <span className={styles.buttonText}> Back</span>
                                </Button>
                            </Col>

                            <Col className={[styles.noGuttersLeft, styles.noGuttersRight].join(" ")}>
                                <Button variant="warning" block onClick={onReset} className={styles.button}>
                                    <FontAwesomeIcon icon={faUndo}/>
                                    <span className={styles.buttonText}> Reset</span>
                                </Button>
                            </Col>

                            <Col className={styles.noGuttersRight}>
                                <Button variant="success" block onClick={onConfirm} className={styles.button} disabled={isValid ? !isValid() : false}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                    <span className={styles.buttonText}> Confirm</span>
                                </Button>
                            </Col>
                        </Form.Row>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default DataSettingsMenu;

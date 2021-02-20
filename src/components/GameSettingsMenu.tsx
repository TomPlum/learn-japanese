import {Component} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {GameMode} from "../types/GameMode";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "../styles/sass/components/GameSettingsMenu.module.scss";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

export interface TestSettings {
    includeHiragana: boolean;
    includeKatakana: boolean;
}

interface TestModeMenuProps {
    mode: GameMode;
    onSubmit: (settings: TestSettings) => void;
}

interface TestModeMenuState {
    selectedHiragana: boolean;
    selectedKatakana: boolean;
    includeDiagraphs: boolean;
}

class GameSettingsMenu extends Component<TestModeMenuProps, TestModeMenuState> {
    constructor(props: TestModeMenuProps | Readonly<TestModeMenuProps>) {
        super(props);
        this.state = {
            selectedHiragana: true,
            selectedKatakana: false,
            includeDiagraphs: false
        }
    }

    render() {
        const {selectedHiragana, selectedKatakana} = this.state;

        return (
            <Container fluid>
                <Form>
                    <Form.Row>
                        <Form.Label className={styles.heading}>{this.props.mode} Game Settings</Form.Label>
                    </Form.Row>

                    <Form.Row>
                        <Form.Label className={styles.label}>Kana</Form.Label>
                    </Form.Row>

                    <Form.Row>
                        <Form.Check
                            inline
                            label="Hiragana"
                            className={styles.check}
                            checked={selectedHiragana}
                            onChange={() => this.setState({selectedHiragana: !selectedHiragana})}
                            disabled={selectedHiragana && !selectedKatakana}
                        />
                        <Form.Check
                            inline
                            label="Katakana"
                            className={styles.check}
                            checked={selectedKatakana}
                            onChange={() => this.setState({selectedKatakana: !selectedKatakana})}
                            disabled={selectedKatakana && !selectedHiragana}
                        />
                    </Form.Row>

                    <Form.Row>
                        <Button variant="success" block onClick={this.onConfirmation} className={styles.confirm}>
                            <FontAwesomeIcon icon={faCheck}/> Confirm
                        </Button>
                    </Form.Row>
                </Form>
            </Container>
        );
    }

    onConfirmation = () => {
        const {selectedHiragana, selectedKatakana} = this.state;
        this.props.onSubmit({includeHiragana: selectedHiragana, includeKatakana: selectedKatakana});
    }
}

export default GameSettingsMenu;
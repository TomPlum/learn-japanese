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
}

class GameSettingsMenu extends Component<TestModeMenuProps, TestModeMenuState> {
    constructor(props: TestModeMenuProps | Readonly<TestModeMenuProps>) {
        super(props);
        this.state = {
            selectedHiragana: true,
            selectedKatakana: false
        }
    }

    render() {
        const { selectedHiragana, selectedKatakana } = this.state;

        return (
            <Container>
                <Form>
                    <Form.Row>
                        <Form.Label className={styles.heading}>{this.props.mode} Game Settings</Form.Label>
                    </Form.Row>
                    <hr />
                    <Form.Row>
                        <Form.Check
                            inline
                            label="Hiragana"
                            checked={selectedHiragana}
                            onChange={() => this.setState({selectedHiragana: !selectedHiragana})}
                            disabled={selectedHiragana && !selectedKatakana}
                        />
                        <Form.Check
                            inline
                            label="Katakana"
                            checked={selectedKatakana}
                            onChange={() => this.setState({selectedKatakana: !selectedKatakana})}
                            disabled={selectedKatakana && !selectedHiragana}
                        />
                    </Form.Row>
                    <Form.Row>
                        <Button variant="success" block onClick={this.onConfirmation.bind(this)}>
                            <FontAwesomeIcon icon={faCheck} /> Confirm
                        </Button>
                    </Form.Row>
                </Form>
            </Container>
        );
    }

    onConfirmation = () => {
        const { selectedHiragana, selectedKatakana } = this.state;
        this.props.onSubmit({includeHiragana: selectedHiragana, includeKatakana: selectedKatakana});
    }
}

export default GameSettingsMenu;
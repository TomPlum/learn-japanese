import { Component } from "react";
import { Form } from "react-bootstrap";
import { KanaSettings } from "../../types/GameSettings";
import styles from "../../styles/sass/components/GameSettingsMenu.module.scss";

interface KanaSettingsProps {
    onSelect: (settings: KanaSettings) => void;
}

interface KanaSettingsState {
    hiragana: boolean;
    katakana: boolean;
    diagraphs: boolean;
}

class KanaSettingsForm extends Component<KanaSettingsProps, KanaSettingsState> {
    constructor(props: KanaSettingsProps | Readonly<KanaSettingsProps>) {
        super(props);
        this.state = {
            hiragana: true,
            katakana: false,
            diagraphs: false
        }
    }

    render() {
        const { hiragana, katakana, diagraphs } = this.state;

        return (
            <Form.Row>
                <Form.Check
                    inline
                    label="Hiragana"
                    className={styles.check}
                    checked={hiragana}
                    onChange={() => this.setState({ hiragana: !hiragana }, this.handleChange)}
                    disabled={hiragana && !katakana}
                />
                <Form.Check
                    inline
                    label="Katakana"
                    className={styles.check}
                    checked={katakana}
                    onChange={() => this.setState({ katakana: !katakana }, this.handleChange)}
                    disabled={katakana && !hiragana}
                />
                <Form.Check
                    label="Include Diagraphs"
                    className={styles.check}
                    checked={diagraphs}
                    onChange={() => this.setState({ diagraphs: !diagraphs }, this.handleChange)}
                />
            </Form.Row>
        );
    }

    handleChange = () => {
        const { hiragana, katakana, diagraphs } = this.state;
        this.props.onSelect({ hiragana, katakana, diagraphs });
    }
}

export default KanaSettingsForm;
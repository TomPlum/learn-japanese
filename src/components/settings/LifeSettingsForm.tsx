import React, { Component } from "react";
import { LifeSettings } from "../../types/GameSettings";
import { LifeQuantity } from "../../types/LifeQuantity";
import LivesSelector from "./LivesSelector";
import { Form } from "react-bootstrap";
import styles from "../../styles/sass/components/settings/GameSettingsMenu.module.scss";

interface LifeSettingsFormProps {
    onChange: (settings: LifeSettings) => void;
}

interface LifeSettingsFormState {
    enabled: boolean;
    quantity: LifeQuantity;
}

class LifeSettingsForm extends Component<LifeSettingsFormProps, LifeSettingsFormState> {

    private readonly selector: React.RefObject<LivesSelector>;
    private readonly defaultState = { enabled: false, quantity: LifeQuantity.FIVE };

    constructor(props: LifeSettingsFormProps | Readonly<LifeSettingsFormProps>) {
        super(props);
        this.selector = React.createRef();
        this.state = this.defaultState;
    }

    componentDidMount() {
        this.props.onChange(this.defaultState);
    }

    componentDidUpdate(prevProps: Readonly<LifeSettingsFormProps>, prevState: Readonly<LifeSettingsFormState>) {
        if (prevState !== this.state) {
            const { enabled, quantity } = this.state;
            this.props.onChange({ enabled, quantity });
        }
    }

    render() {
        const { enabled } = this.state;

        return (
            <Form.Row>
                <Form.Check
                    inline
                    label="Enable"
                    type="switch"
                    id="lives"
                    className={styles.check}
                    checked={enabled}
                    onChange={() => this.setState({ enabled: !enabled })}
                />
                <LivesSelector
                    ref={this.selector}
                    disabled={!enabled}
                    onSelect={(quantity) => this.setState({ quantity })}
                />
            </Form.Row>
        );
    }

    reset = () => {
        this.selector.current?.reset();
        this.setState(this.defaultState);
    }
}

export default LifeSettingsForm;
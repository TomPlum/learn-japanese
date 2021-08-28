import React, { ChangeEvent, Component } from "react";
import { Form, OverlayTrigger } from "react-bootstrap";
import LearnableField from "../../../types/learn/LearnableField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import PopOver from "../PopOver";
import styles from "../../../styles/sass/components/ui/select/LearnableFieldSelector.module.scss";

export interface LearnableFieldSelectorProps {
    default?: LearnableField;
    exclude?: LearnableField;
    onSelect: (field: LearnableField) => void;
}

interface LearnableFieldSelectorState {
    selected: LearnableField;
}

class LearnableFieldSelector extends Component<LearnableFieldSelectorProps, LearnableFieldSelectorState> {

    constructor(props: Readonly<LearnableFieldSelectorProps> | LearnableFieldSelectorProps) {
        super(props);
        this.state = {
            selected: props.default ?? LearnableField.KANA
        }
    }

    componentDidUpdate(prevProps: Readonly<LearnableFieldSelectorProps>, prevState: Readonly<LearnableFieldSelectorState>) {
        if (prevState !== this.state) {
            this.props.onSelect(this.state.selected);
        }
    }

    render() {
        const { selected } = this.state;
        const { exclude } = this.props;

        const helpPopover = <PopOver title={selected.name} text={selected.description} />;

        return (
            <div>
                <OverlayTrigger trigger={["hover", "click"]} overlay={helpPopover} placement="top">
                    <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} data-testid="field-help"/>
                </OverlayTrigger>

                <Form.Control as="select" onChange={this.handleOnChange} className={styles.menu} data-testid="learnable-field-selector">
                    {LearnableField.values()
                        .filter((field: LearnableField) => field !== exclude)
                        .map(field => {
                            return (
                                <option key={field.name} selected={selected.name === field.name}>
                                    {field.name}
                                </option>
                            );
                        })}
                </Form.Control>
            </div>
        );
    }

    private handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const field = LearnableField.fromNameString(e.target.value);
        this.setState({ selected: field });
        this.props.onSelect(field);
    }
}

export default LearnableFieldSelector;

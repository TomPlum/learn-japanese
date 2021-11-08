import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import styles from "../../../styles/sass/components/ui/fields/SearchField.module.scss";

export interface SearchFieldProps {
    value?: string;
    append?: string;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    onChange: (value: string) => void;
}

class SearchField extends Component<SearchFieldProps> {
    render() {
        const { value, append, placeholder, disabled, className } = this.props;
        return (
            <InputGroup className={[styles.inputGroup, className].join(" ")}>
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <FontAwesomeIcon icon={faSearch}/>
                    </InputGroup.Text>
                </InputGroup.Prepend>

                <Form.Control
                    type="text"
                    value={value}
                    disabled={disabled}
                    className={styles.input}
                    placeholder={placeholder ?? "Enter search term"}
                    onChange={(e) => this.props.onChange(e.target.value)}
                />

                {append && (
                    <InputGroup.Append>
                        <InputGroup.Text>
                            {append}
                        </InputGroup.Text>
                    </InputGroup.Append>
                )}
            </InputGroup>
        );
    }
}

export default SearchField;

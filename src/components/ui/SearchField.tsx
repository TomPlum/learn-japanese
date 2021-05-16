import { Form, InputGroup } from "react-bootstrap";
import styles from "../../styles/sass/components/ui/SearchField.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

interface SearchFieldProps {
    value?: string;
    append?: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

class SearchField extends Component<SearchFieldProps> {
    render() {
        const { value, append, placeholder } = this.props;
        return (
            <InputGroup className={styles.inputGroup}>
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <FontAwesomeIcon icon={faSearch}/>
                    </InputGroup.Text>
                </InputGroup.Prepend>

                <Form.Control
                    type="text"
                    value={value}
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
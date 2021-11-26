import React, { ChangeEvent, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Keyword from "./Keyword";
import styles from "../../../styles/sass/components/ui/fields/KeywordSearchField.module.scss";

export interface KeywordSearchFieldProps {
    value: string;
    keywords: KeywordMeta[];
    disabled?: boolean;
    results?: number;
    className?: string;
    onChange: (value: string) => void;
    onSubmit: (params: KeywordMeta[], search?: string) => void;
}

export interface KeywordMeta {
    key: string;
    type: string;
    value?: string;
}

const KeywordSearchField = (props: KeywordSearchFieldProps) => {
    const { value, keywords, disabled, className, results, onChange, onSubmit } = props;

    const [invalid, setInvalid] = useState(false);
    const [active, setActive] = useState<KeywordMeta[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const search = e.target.value;
        const sanitisedSearch = search.replaceAll(" = ", "=").trimLeft();

        if (!disabled && e.type === 'Enter') {
            handleSubmit(search);
            e.preventDefault();
            e.stopPropagation();
        }

        if (search.includes("=") && !keywords.map(word => word.key).some(key => search.includes(key))) {
            setInvalid(true);
        } else {
            onChange(search);
            setInvalid(false);
        }

        keywords.forEach((keyword: KeywordMeta) => {
            if (search.includes(keyword.key)) {
                const keyOnwards = sanitisedSearch.substring(sanitisedSearch.indexOf(keyword.key));
                const valueStartIndex = keyOnwards.indexOf("=");
                const valueEndIndex = keyOnwards.indexOf(" ") === -1 ? undefined : keyOnwards.indexOf(" ");
                const value = valueStartIndex > -1 ? keyOnwards.substring(valueStartIndex + 1, valueEndIndex) : undefined;

                if (value) {
                    if (active.map(word => word.key).includes(keyword.key)) {
                        const activeWithCurrentRemoved = active.filter(word => word.key !== keyword.key);
                        setActive(activeWithCurrentRemoved.concat({ key: keyword.key, type: keyword.type, value: value }));
                    } else {
                        setActive(active.concat({ value: value, ...keyword }));
                    }

                    const lastCharacter = search[search.length - 1];
                    if (sanitisedSearch.includes(" ")) {

                    }
                    //onChange(sanitisedSearch.replace(`${keyword.key}=${value}`, ""));
                }
            }
        });
    }

    const handleSubmit = (value: string) => {
        if (!invalid) {
            onSubmit(active, value);
        }
    }

    const handleDismiss = (key: string) => {
        setActive(active.filter(word => word.key !== key));
    }

    return (
        <>
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
                    isInvalid={invalid}
                    placeholder="search"
                    onChange={handleChange}
                    className={styles.input}
                />

                {results && (
                    <InputGroup.Append>
                        <InputGroup.Text>
                            {results} Results
                        </InputGroup.Text>
                    </InputGroup.Append>
                )}
            </InputGroup>

            <div className={styles.paramWrapper}>
                {active.map((keyword: KeywordMeta) => {
                    return (
                        <Keyword
                            meta={keyword}
                            key={keyword.key}
                            onDismiss={handleDismiss}
                            className={styles.parameter}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default KeywordSearchField

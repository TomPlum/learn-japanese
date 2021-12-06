import React, { ChangeEvent, useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Keyword from "./Keyword";
import styles from "../../../styles/sass/components/ui/fields/KeywordSearchField.module.scss";
import { useDebouncedEffect } from "../../../hooks";

export interface KeywordSearchFieldProps {
    keywords: KeywordMeta[];
    disabled?: boolean;
    results?: number;
    className?: string;
    onChange: (value: string) => void;
    onRemoveFilter: (params: KeywordMeta) => void;
    onSubmit: (params: KeywordMeta[]) => void;
}

export interface KeywordMeta {
    key: string;
    type: string;
    value?: string;
}

const KeywordSearchField = (props: KeywordSearchFieldProps) => {
    const { keywords, disabled, className, results, onChange, onRemoveFilter, onSubmit } = props;

    const [search, setSearch] = useState("");
    const [invalid, setInvalid] = useState(false);
    const [active, setActive] = useState<KeywordMeta[]>([]);
    const [inParameter, setInParameter] = useState(false);

    useDebouncedEffect(() => {
        if (!inParameter) {
            onChange(search);
        }
    }, 300, [search]);

    useEffect(() => {
        if (inParameter) {
            const sanitised = search.replaceAll(" = ", "=").trimLeft();

            keywords.forEach((keyword: KeywordMeta) => {
                if (search.includes(keyword.key)) {

                    const keyOnwards = sanitised.substring(sanitised.indexOf(keyword.key));
                    const valueStartIndex = keyOnwards.indexOf("=");
                    const valueEndIndex = keyOnwards.indexOf(" ") === -1 ? undefined : keyOnwards.indexOf(" ");
                    const value = valueStartIndex > -1 ? keyOnwards.substring(valueStartIndex + 1, valueEndIndex) : undefined;

                    setInvalid(!value);

                    if (value) {
                        if (active.map(word => word.key).includes(keyword.key)) {
                            const activeWithCurrentRemoved = active.filter(word => word.key !== keyword.key);
                            setActive(activeWithCurrentRemoved.concat({
                                key: keyword.key,
                                type: keyword.type,
                                value: value
                            }));
                        } else {
                            setActive(active.concat({ value: value, ...keyword }));
                        }

                        if (sanitised.includes(" ")) {
                            setSearch("");
                            onSubmit(active);
                        }
                    }
                }
            });
        }
    }, [inParameter, search]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const search = e.target.value;
        setSearch(search);
        setInParameter(search.includes(">"));
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!invalid && e.key === 'Enter') {
            setSearch("");
            onSubmit(active);
        }
    }

    const handleDismiss = (key: string) => {
        setActive(current => {
            return current.filter(meta => {
                if (meta.key === key) {
                    onRemoveFilter(meta);
                } else {
                    return meta;
                }
            })
        });
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
                    value={search}
                    disabled={disabled}
                    placeholder="search"
                    onChange={handleChange}
                    className={styles.input}
                    onKeyPress={handleKeyPress}
                />

                {results && (
                    <InputGroup.Append>
                        <InputGroup.Text>
                            {results} Result{results > 1 ? "s" : ""}
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

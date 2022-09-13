import styles from "../../../styles/sass/components/ui/fields/UserSearchField.module.scss";
import React, { useState } from "react";
import { useDebouncedEffect } from "../../../hooks";
import UserService from "../../../service/UserService";
import { Fade, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export interface UserSearchFieldProps {
    disabled: boolean;
    className?: string;
    onSelect: (username: string) => void;
}

const UserSearchField = (props: UserSearchFieldProps) => {

    const { disabled, className, onSelect } = props;

    const [search, setSearch] = useState<string | undefined>(undefined);
    const [results, setResults] = useState<string[]>([]);
    const [focused, setFocused] = useState(false);

    const service = new UserService();

    useDebouncedEffect(() => {
        if (search) {
            service.getPublicUsers(search).then(response => {
                setResults(response);
            });
        }
    }, 300, [search]);

    const handleSelect = (username: string) => {
        onSelect(username);
        setSearch(undefined);
    }

    return (
        <>
            <InputGroup className={[styles.container, className].join(" ")}>
                <InputGroup.Prepend>
                    <InputGroup.Text className={styles.prepend}>
                        <FontAwesomeIcon icon={faSearch} className={styles.icon}/>
                    </InputGroup.Text>
                </InputGroup.Prepend>

                <Form.Control
                    type="text"
                    value={search}
                    disabled={disabled}
                    className={styles.input}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    data-testid="user-search-field"
                    placeholder="Search for a user..."
                    onChange={(e) => setSearch(e.target.value)}
                />
            </InputGroup>

            {focused && (
                <Fade in={focused}>
                    <div className={styles.resultsWrapper}>
                        {results.map(username => (
                            <span key={username} onClick={() => handleSelect(username)} className={styles.result}>
                                {username}
                            </span>)
                        )}

                        {search && results.length === 0 && (
                            <span>No results.</span>
                        )}
                    </div>
                </Fade>
            )}
        </>
    );
}

export default UserSearchField;

import styles from "../../../styles/sass/components/ui/fields/UserSearchField.module.scss";
import React, { useState } from "react";
import { useDebouncedEffect } from "../../../hooks";
import UserService from "../../../service/UserService";
import { Fade, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faSearch } from "@fortawesome/free-solid-svg-icons";

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
    const [loading, setLoading] = useState(false);

    const service = new UserService();

    useDebouncedEffect(() => {
        if (search) {
            setLoading(true);
            service.getPublicUsers(search).then(response => {
                setResults(response);
            }).finally(() => {
                setLoading(false);
            });
        }
    }, 300, [search]);

    const handleSelect = (username: string) => {
        setSearch(undefined);
        setFocused(false);
        onSelect(username);
    }

    return (
        <>
            <InputGroup className={[styles.container, className].join(" ")}>
                <InputGroup.Prepend>
                    <InputGroup.Text className={styles.prepend}>
                        <FontAwesomeIcon
                            spin={loading}
                            className={styles.icon}
                            icon={loading ? faCircleNotch : faSearch}
                        />
                    </InputGroup.Text>
                </InputGroup.Prepend>

                <Form.Control
                    type="text"
                    value={search}
                    className={styles.input}
                    disabled={disabled || loading}
                    onFocus={() => setFocused(true)}
                    // onBlur={() => setFocused(false)}
                    data-testid="user-search-field"
                    placeholder="Search for a user..."
                    onChange={(e) => setSearch(e.target.value)}
                />
            </InputGroup>

            {focused && search && (
                <Fade in={focused}>
                    <div className={styles.resultsWrapper}>
                        {results.map(username => (
                            <p key={username} onClick={() => handleSelect(username)} className={styles.result}>
                                {username}
                            </p>)
                        )}

                        {search && results.length === 0 && (
                            <span className={styles.empty}>No results.</span>
                        )}
                    </div>
                </Fade>
            )}
        </>
    );
}

export default UserSearchField;

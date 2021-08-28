import React, { Component } from 'react';
import { Spinner } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/LoadingSpinner.module.scss";
import { Variant } from "react-bootstrap/types";

class LoadingSpinner extends Component<{ active: boolean, className?: string, variant?: Variant }> {
    render() {
        const { active, variant, className } = this.props;
        if (active) {
            return (
                <div className={className}>
                    <Spinner
                        role="status"
                        title="Loading"
                        animation="border"
                        className={styles.spinner}
                        variant={variant ?? "primary"}
                    />
                </div>
            );
        }
        return null;
    }
}

export default LoadingSpinner

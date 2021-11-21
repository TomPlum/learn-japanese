import React, { Component } from 'react';
import { Spinner } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/LoadingSpinner.module.scss";
import { Variant } from "react-bootstrap/types";

export interface LoadingSpinnerProps {
    active: boolean;
    className?: string;
    variant?: Variant;
    size?: string;
    thickness?: string;
}

const LoadingSpinner = (props: LoadingSpinnerProps) => {
    const { active, variant, className, size, thickness } = props;

    if (active) {
        return (
            <div className={className}>
                <Spinner
                    style={{ width: size, height: size, fontSize: thickness }}
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

export default LoadingSpinner

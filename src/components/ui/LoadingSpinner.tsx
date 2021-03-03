import React, { Component } from 'react';
import { Spinner } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/LoadingSpinner.module.scss";

class LoadingSpinner extends Component<{ active: any }> {
    render() {
        const { active } = this.props;
        if (active) {
            return (
                <div>
                    <Spinner
                        className={styles.spinner}
                        animation="border"
                        role="status"
                        variant="danger"
                        title="Loading"
                    />
                </div>
            );
        }
        return null;
    }
}

export default LoadingSpinner
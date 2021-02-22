import React, { Component } from 'react';
import { Spinner } from "react-bootstrap";
import styles from "../../styles/sass/layout/LoadingSpinner.module.scss";

class LoadingSpinner extends Component<{ active: any }> {
    render() {
        let { active } = this.props;
        if (active) {
            return (
                <div>
                    <Spinner className={styles.spinner} animation="border" role="status" variant="danger"/>
                </div>
            );
        }
        return null;
    }
}

export default LoadingSpinner
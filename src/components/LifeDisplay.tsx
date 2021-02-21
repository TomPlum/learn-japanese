import React, { Component } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/sass/components/LifeDisplay.module.scss";

interface LifeDisplayProps {
    hearts: number;
}

class LifeDisplay extends Component<LifeDisplayProps> {
    render() {
        return (
            <>
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                <span className={styles.quantity}>{this.props.hearts}</span>
            </>
        );
    }
}

export default LifeDisplay;
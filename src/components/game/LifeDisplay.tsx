import React, { Component } from "react";
import { faHeart, faInfinity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/game/LifeDisplay.module.scss";

export interface LifeDisplayProps {
    hearts: number;
}

class LifeDisplay extends Component<LifeDisplayProps> {
    render() {
        const { hearts } = this.props;
        return (
            <>
                <FontAwesomeIcon icon={faHeart} title="Lives" className={styles.icon}/>
                <span className={styles.quantity}>
                    {hearts === 999 ? <FontAwesomeIcon icon={faInfinity} title="Infinite"/> : hearts}
                </span>
            </>
        );
    }
}

export default LifeDisplay;
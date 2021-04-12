import React, { Component } from "react";
import { faHeart, faInfinity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sass/components/game/LifeDisplay.module.scss";

export interface LifeDisplayProps {
    hearts: number;
    className?: string;
}

class LifeDisplay extends Component<LifeDisplayProps> {
    render() {
        const { hearts, className } = this.props;
        return (
            <div className={className}>
                <FontAwesomeIcon icon={faHeart} title="Lives" className={styles.icon}/>
                <span className={styles.quantity}>
                    {hearts === 999 ? <FontAwesomeIcon icon={faInfinity} title="Infinite"/> : hearts}
                </span>
            </div>
        );
    }
}

export default LifeDisplay;
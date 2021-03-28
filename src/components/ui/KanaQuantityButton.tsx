import { Component } from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/sass/components/ui/KanaQuantityButton.module.scss";

interface KanaQuantityButtonProps {
    cards: number;
    selected: number;
    onClick: (quantity: number) => void;
}

class KanaQuantityButton extends Component<KanaQuantityButtonProps> {
    render() {
        const { cards, selected, onClick, children } = this.props;
        return (
            <Button onClick={() => onClick(cards)} className={selected === cards ? styles.selected : styles.notSelected}>
                {children}
                <p className={styles.name}>{cards}</p>
            </Button>
        );
    }
}

export default KanaQuantityButton;
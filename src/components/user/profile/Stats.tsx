import { Card } from "react-bootstrap";
import styles from "../../../styles/sass/components/user/profile/Stats.module.scss";

const Stats = () => {
    return (
        <Card className={styles.card}>
            <Card.Body>
                <h2 className={styles.heading}>Stats</h2>
            </Card.Body>
        </Card>
    );
}

export default Stats;

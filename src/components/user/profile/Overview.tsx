import { Card } from "react-bootstrap";
import styles from "../../../styles/sass/components/user/profile/Overview.module.scss";

const Overview = () => {
    return (
        <Card className={styles.card}>
            <Card.Body>
                <h2 className={styles.heading}>Overview</h2>
            </Card.Body>
        </Card>

    );
}

export default Overview;

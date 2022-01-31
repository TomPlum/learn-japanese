import { Button } from "react-bootstrap";
import styles from "../../../../styles/sass/components/layout/wizard/play/PlayWizardFooter.module.scss";

export interface PlayWizardFooterProps {
    onNext: () => void;
}

const PlayWizardFooter = (props: PlayWizardFooterProps) => {
    return (
        <div className={styles.wrapper}>
            <Button onClick={props.onNext} className={styles.button} variant="success">
                Next
            </Button>
        </div>
    );
}

export default PlayWizardFooter;

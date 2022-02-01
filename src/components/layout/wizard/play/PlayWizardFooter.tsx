import { Button } from "react-bootstrap";
import styles from "../../../../styles/sass/components/layout/wizard/play/PlayWizardFooter.module.scss";

export interface PlayWizardFooterProps {
    intermediate?: boolean;
    terminal?: boolean;
    onNext: () => void;
    onBack?: () => void;
}

const PlayWizardFooter = (props: PlayWizardFooterProps) => {

    const { intermediate, terminal, onNext, onBack } = props;

    return (
        <div className={styles.wrapper}>
            <div>
                {(intermediate || terminal) && (
                    <Button onClick={onBack} className={styles.back} variant="primary">
                        Back
                    </Button>
                )}
            </div>
            <div>
                <Button onClick={onNext} className={styles.next} variant="success">
                    {terminal ? "Play" : "Next"}
                </Button>
            </div>
        </div>
    );
}

export default PlayWizardFooter;

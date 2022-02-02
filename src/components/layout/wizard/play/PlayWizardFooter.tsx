import { Button } from "react-bootstrap";
import styles from "../../../../styles/sass/components/layout/wizard/play/PlayWizardFooter.module.scss";
import PlayWizardProgress from "./PlayWizardProgress";

export interface PlayWizardFooterProps {
    custom: boolean;
    currentStage: number;
    intermediate?: boolean;
    terminal?: boolean;
    onNext: () => void;
    onBack: () => void;
    onPlay: () => void;
    onChangeStage: (stage: number) => void;
}

const PlayWizardFooter = (props: PlayWizardFooterProps) => {

    const { custom, intermediate, terminal, currentStage, onNext, onBack, onPlay, onChangeStage } = props;

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
                <PlayWizardProgress
                    custom={custom}
                    stage={currentStage}
                    onSelectStage={onChangeStage}
                />
            </div>
            <div>
                <Button onClick={terminal ? onPlay : onNext} className={styles.next} variant="success">
                    {terminal ? "Play" : "Next"}
                </Button>
            </div>
        </div>
    );
}

export default PlayWizardFooter;

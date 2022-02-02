import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../../styles/sass/components/layout/wizard/play/WizardProgressStep.module.scss";

export interface WizardProgressStepProps {
    icon: IconDefinition;
    title: string;
    stage: number;
    className?: string;
    currentStage: number;
    onClick: (stage: number) => void;
}

const WizardProgressStep = (props: WizardProgressStepProps) => {

    const { icon, title, className, stage, currentStage, onClick } = props;

    const handleOnClick = () => {
        onClick(stage);
    }

    const getIconClassName = (): string => {
        if (currentStage > stage) {
            return styles.complete;
        } else if (currentStage === stage) {
            return styles.inProgress;
        } else {
            return styles.incomplete;
        }
    }

    return (
        <FontAwesomeIcon
            fixedWidth
            icon={icon}
            title={title}
            onClick={handleOnClick}
            data-testid={`wizard-progress-step-${stage}`}
            className={[getIconClassName(), className, styles.step].join(" ")}
        />
    )
}

export default WizardProgressStep;

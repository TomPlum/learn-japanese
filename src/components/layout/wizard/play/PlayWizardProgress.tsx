import { faCheckCircle, faDatabase, faHeartbeat, faLightbulb, faProjectDiagram, faQuestionCircle, faStopwatch, faSwatchbook, faTools } from "@fortawesome/free-solid-svg-icons";
import WizardProgressStep from "./WizardProgressStep";

export interface PlayWizardProgressProps {
    stage: number;
    custom: boolean;
    onSelectStage: (stage: number) => void;
}

const PlayWizardProgress = (props: PlayWizardProgressProps) => {

    const { stage, custom, onSelectStage } = props;

    const handleSelectStage = (stage: number) => {
        onSelectStage(stage);
    }

    return (
        <div>
            <WizardProgressStep
                stage={0}
                title="Topic"
                icon={faSwatchbook}
                currentStage={stage}
                onClick={handleSelectStage}
            />

            <WizardProgressStep
                stage={1}
                icon={faTools}
                currentStage={stage}
                title="Preset or Custom"
                onClick={handleSelectStage}
            />

            {!custom && (
                <WizardProgressStep
                    stage={2}
                    title="Preset"
                    currentStage={stage}
                    icon={faProjectDiagram}
                    onClick={handleSelectStage}
                />
            )}

            {custom && (
                <>
                    <WizardProgressStep
                        stage={3}
                        currentStage={stage}
                        icon={faQuestionCircle}
                        title="Question Settings"
                        onClick={handleSelectStage}
                    />

                    <WizardProgressStep
                        stage={4}
                        icon={faLightbulb}
                        currentStage={stage}
                        title="Hint Settings"
                        onClick={handleSelectStage}
                    />

                    <WizardProgressStep
                        stage={5}
                        icon={faHeartbeat}
                        currentStage={stage}
                        title="Life Settings"
                        onClick={handleSelectStage}
                    />

                    <WizardProgressStep
                        stage={6}
                        icon={faStopwatch}
                        currentStage={stage}
                        title="Time Settings"
                        onClick={handleSelectStage}
                    />

                    <WizardProgressStep
                        stage={7}
                        icon={faDatabase}
                        currentStage={stage}
                        title="Data Settings"
                        onClick={handleSelectStage}
                    />

                    <WizardProgressStep
                        stage={8}
                        title="Confirmation"
                        icon={faCheckCircle}
                        currentStage={stage}
                        onClick={handleSelectStage}
                    />
                </>
            )}
        </div>
    );
}

export default PlayWizardProgress;

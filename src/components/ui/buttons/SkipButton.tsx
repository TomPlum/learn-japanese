import { Component } from "react";
import { Button } from "react-bootstrap";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SizeMeProps, withSize } from "react-sizeme";
import styles from "../../../styles/sass/components/ui/buttons/SkipButton.module.scss";

export interface SkipButtonProps extends SizeMeProps {
    disabled?: boolean;
    className?: string;
    onClick: () => void;
}

class SkipButton extends Component<SkipButtonProps> {
    render() {
        const { disabled, className, onClick, size } = this.props;
        const defaultClass = disabled ? styles.disabled : styles.button;
        return (
            <Button className={[defaultClass, className].join(" ")} onClick={onClick} disabled={disabled} variant="danger">
                {(size?.width ?? -1) > 105 && <FontAwesomeIcon icon={faForward} data-testid="icon"/>}
                {' Skip'}
            </Button>
        );
    }
}

export default withSize()(SkipButton);

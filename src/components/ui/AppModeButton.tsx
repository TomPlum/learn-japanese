import { Component } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { AppMode } from "../../types/AppMode";
import menuStyles from "../../styles/sass/components/layout/ControlsMenu.module.scss";

export interface AppModeButtonProps {
    onClick: (mode: AppMode) => void;
    className?: string;
    disabled: boolean;
}

interface AppModeButtonState {
    mode: AppMode;
}

class AppModeButton extends Component<AppModeButtonProps, AppModeButtonState> {
    constructor(props: AppModeButtonProps | Readonly<AppModeButtonProps>) {
        super(props);
        this.state = {
            mode: AppMode.PLAY
        }
    }

    componentDidUpdate(prevProps: Readonly<AppModeButtonProps>, prevState: Readonly<AppModeButtonState>) {
        const { mode } = this.state;
        if (prevState.mode !== mode) {
            this.props.onClick(mode);
        }
    }

    render() {
        const { className, disabled } = this.props;
        const { mode } = this.state;

        return (
            <Nav.Link className={className} onClick={this.handleOnClick} disabled={disabled}>
                <div>
                    <FontAwesomeIcon icon={mode === AppMode.PLAY ? faGraduationCap : faGamepad} className={menuStyles.icon} />
                </div>
                <span className={menuStyles.linkText}>{mode === AppMode.PLAY ? "Learn" : "Play"}</span>
            </Nav.Link>
        );
    }

    private handleOnClick = () => {
        const { mode } = this.state;
        switch(mode) {
            case AppMode.LEARN: {
                this.setState({ mode: AppMode.PLAY });
                break;
            }
            case AppMode.PLAY: {
                this.setState({ mode: AppMode.LEARN });
                break;
            }
        }
    }
}

export default AppModeButton;
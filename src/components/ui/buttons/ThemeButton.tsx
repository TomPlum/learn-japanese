import { Component } from "react";
import { Theme } from "../../../types/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import menuStyles from "../../../styles/sass/components/layout/ControlsMenu.module.scss";

export interface ThemeButtonProps {
    className?: string;
}

interface ThemeButtonState {
    theme: Theme;
}

class ThemeButton extends Component<ThemeButtonProps, ThemeButtonState> {
    constructor(props: ThemeButtonProps | Readonly<ThemeButtonProps>) {
        super(props);
        this.state = {
            theme: Theme.DARK
        }
    }

    render() {
        const { className } = this.props;
        const { theme } = this.state;

        return (
            <Nav.Link className={className} onClick={this.handleOnClick}>
                <div>
                    <FontAwesomeIcon icon={theme === Theme.DARK ? faLightbulb : faMoon} className={menuStyles.icon} />
                </div>
                <span className={menuStyles.linkText}>{theme === Theme.DARK ? "Light" : "Dark"}</span>
            </Nav.Link>
        );
    }

    private handleOnClick = () => {
        switch(this.state.theme) {
            case Theme.DARK: {
                this.setState({ theme: Theme.LIGHT });
                break;
            }
            case Theme.LIGHT: {
                this.setState({ theme: Theme.DARK });
                break;
            }
        }
    }
}

export default ThemeButton;

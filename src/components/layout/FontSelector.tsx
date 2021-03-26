import React, { Component } from "react";
import { Dropdown, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faFont } from "@fortawesome/free-solid-svg-icons";
import menuStyles from "../../styles/sass/components/layout/ControlsMenu.module.scss";
import styles from "../../styles/sass/components/layout/FontSelector.module.scss";

type CustomToggleProps = {
    onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const CustomToggle = React.forwardRef<any, CustomToggleProps>(({ children, onClick }, ref) => (
    <Nav.Link
        href=""
        ref={ref}
        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            e.preventDefault();
            onClick(e);
        }}
        className={menuStyles.navLink}
    >
        {children}
    </Nav.Link>
));

interface FontSelectorProps {
    className?: string;
    onSelect: (font: string) => void;
}

interface FontSelectorState {
    selected: string;
}

interface Font {
    displayName: string;
    name: string;
}

class FontSelector extends Component<FontSelectorProps, FontSelectorState> {

    constructor(props: Readonly<FontSelectorProps> | FontSelectorProps) {
        super(props);
        this.state = {
            selected: "Ciutadella"
        }
    }

    render() {
        const fonts: Font[] = [
            { displayName: "Ciutadella", name: "Ciutadella Rounded"},
            { displayName: "Montserrat", name: "Montserrat"},
            { displayName: "Segoe UI", name: "Segoe UI"},
        ];

        const { selected } = this.state;
        const { className } = this.props;

        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} className={className}>
                    <div>
                        <FontAwesomeIcon icon={faFont} className={menuStyles.icon} />
                    </div>
                    <span className={menuStyles.linkText}>Font</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles.menu}>
                    {fonts.map((font: Font) => {
                        return (
                            <Dropdown.Item
                                eventKey={font.name}
                                active={selected === font.name}
                                onSelect={this.handleSelect}
                                style={{ fontFamily: font.name }}
                                className={styles.font}
                                key={font.name}
                            >
                                {font.displayName}
                                {selected === font.name &&
                                    <span className={styles.check}>
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                }
                            </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    private handleSelect = (value: string | null) => {
        this.setState({ selected: value ?? "Unknown" });
        if (value) this.props.onSelect(value);
    }
}

export default FontSelector;
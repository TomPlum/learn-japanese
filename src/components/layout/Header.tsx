import { Component } from "react";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/layout/Header.module.scss";

interface HeaderProps {
    onLaunchSearch: () => void;
}

class Header extends Component<HeaderProps> {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand={undefined} sticky="top">
                <Navbar.Brand className={styles.brand}>
                    <img src="logo.png" className={styles.logo} alt="logo"/>
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <FontAwesomeIcon
                            className={styles.search}
                            icon={faSearch}
                            onClick={this.props.onLaunchSearch}
                        />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
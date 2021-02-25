import { Component } from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sass/components/layout/Header.module.scss";

interface HeaderProps {
    onLaunchSearch: () => void;
}

class Header extends Component<HeaderProps> {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand className={styles.brand}>
                    <img src="logo.png" className={styles.logo} alt="logo"/>
                </Navbar.Brand>

                <FontAwesomeIcon className={styles.search} icon={faSearch} onClick={this.props.onLaunchSearch}/>
            </Navbar>
        );
    }
}

export default Header;
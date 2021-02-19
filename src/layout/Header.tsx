import {Component} from "react";
import {Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/sass/layout/Header.module.scss";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand>
                    <FontAwesomeIcon icon={faCircle} className={styles.logo}/>
                    {' '}Learn Japanese
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Test Me</Nav.Link>
                        <NavDropdown title="Resources" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Gallery</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search Kana" className="mr-sm-2"/>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
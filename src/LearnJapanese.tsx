import './styles/sass/LearnJapanese.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from "react-bootstrap";
import Header from "./layout/Header";
import styles from "./styles/sass/LearnJapanese.module.scss";
import Main from "./layout/Main";

function LearnJapanese() {
    return (
        <>
            <Header/>
            <Row>
                <Main/>
            </Row>
        </>
    );
}

export default LearnJapanese;

import './styles/sass/LearnJapanese.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import { BrowserRouter as Router, } from "react-router-dom";
import Main from "./components/layout/Main";
import Header from "./components/layout/Header";

class LearnJapanese extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Main />
            </Router>
        );
    }
}

export default LearnJapanese;

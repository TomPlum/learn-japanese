import './styles/sass/LearnJapanese.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import Main from "./components/layout/Main";
import ErrorBoundary from "./components/error/ErrorBoundary";
import { Location } from "history";
import { Component } from "react";

interface LearnJapaneseProps {
    location?: Location;
}

class LearnJapanese extends Component<LearnJapaneseProps> {
    render() {
        return (
            <ErrorBoundary key={this.props?.location?.pathname}>
                <Main/>
            </ErrorBoundary>
        );
    }
}

export default LearnJapanese;

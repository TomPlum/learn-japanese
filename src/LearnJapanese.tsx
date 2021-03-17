import './styles/sass/LearnJapanese.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/layout/Main";
import ErrorBoundary from "./components/ErrorBoundary";
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

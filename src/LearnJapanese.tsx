import './styles/sass/LearnJapanese.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import Main from "./components/layout/Main";
import { Location } from "history";
import { Component } from "react";
import { store } from "./store";
import { Provider } from "react-redux";

interface LearnJapaneseProps {
    location?: Location;
}

class LearnJapanese extends Component<LearnJapaneseProps> {
    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}

export default LearnJapanese;

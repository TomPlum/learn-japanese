import './styles/sass/LearnJapanese.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import Main from "./components/layout/Main";
import { Location } from "history";
import { Provider } from "react-redux";
import { EnhancedStore } from "@reduxjs/toolkit";

interface LearnJapaneseProps {
    store: EnhancedStore;
    location?: Location;
}

const LearnJapanese = (props: LearnJapaneseProps) => {

    const { store } = props;

    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
}

export default LearnJapanese;

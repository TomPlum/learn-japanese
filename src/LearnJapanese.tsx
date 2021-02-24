import './styles/sass/LearnJapanese.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { Component } from "react";
import Search from "./components/layout/Search";

interface LearnJapaneseState {
    showNavigation: boolean;
    showSearch: boolean;
}

class LearnJapanese extends Component<{}, LearnJapaneseState> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            showNavigation: true,
            showSearch: false
        }
    }

    render() {
        const { showNavigation, showSearch } = this.state;

        return (
            <>
                {showNavigation && <Header onLaunchSearch={() => this.setState({ showSearch: true })}/>}

                {!showSearch && <Main
                    onLaunchTest={() => this.setState({ showNavigation: false })}
                    onCloseTest={() => this.setState({ showNavigation: true })}
                />}

                {showSearch && <Search onClose={() => this.setState({ showSearch: false })}/>}
            </>
        );
    }
}

export default LearnJapanese;

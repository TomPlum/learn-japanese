import './styles/sass/LearnJapanese.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { Component } from "react";

interface LearnJapaneseState {
    showNavigation: boolean;
}

class LearnJapanese extends Component<{ }, LearnJapaneseState> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            showNavigation: true
        }
    }

    render() {
        const { showNavigation } = this.state;

        return (
            <>
                {showNavigation && <Header/>}
                <Main
                    onLaunchTest={() => this.setState({ showNavigation: false })}
                    onCloseTest={() => this.setState({ showNavigation: true })}
                />
            </>
        );
    }
}

export default LearnJapanese;

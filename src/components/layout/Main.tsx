import { Component } from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/sass/components/layout/Main.module.scss";
import { GameSettings } from "../../types/GameSettings";
import { Route } from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import Game from "../game/Game";
import Search from "./Search";
import Landing from "./Landing";

interface MainState {
    settings?: GameSettings;
}

class Main extends Component<{}, MainState> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            settings: undefined,
        }
    }

    render() {
        const { settings } = this.state;

        return (
            <Container className={settings ? styles.wrapperFullScreen : styles.wrapper}>
                <Switch className={styles.switch}>
                    <Route path="/" component={Landing} exact />
                    <Route path="/play" component={Game}/>
                    <Route path="/search" component={Search}/>
                </Switch>
            </Container>
        );
    }

}

export default Main;
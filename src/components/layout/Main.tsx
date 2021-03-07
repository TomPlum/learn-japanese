import { Component } from "react";
import styles from "../../styles/sass/components/layout/Main.module.scss";
import { Route } from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import GamePage from "../game/GamePage";
import Search from "./Search";
import Landing from "./Landing";
import KanjiPage from "../pages/KanjiPage";

class Main extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Switch className={styles.switch}>
                    <Route path="/" component={Landing} exact />
                    <Route path="/play" component={GamePage}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/kanji" component={KanjiPage}/>
                </Switch>
            </div>
        );
    }

}

export default Main;
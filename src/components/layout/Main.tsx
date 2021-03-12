import { Component } from "react";
import styles from "../../styles/sass/components/layout/Main.module.scss";
import { Route } from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import GamePage from "../pages/GamePage";
import SearchPage from "../pages/SearchPage";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import KanjiPage from "../pages/KanjiPage";

class Main extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Switch className={styles.switch}>
                    <Route path="/" component={LandingPage} exact />
                    <Route path="/play" component={GamePage}/>
                    <Route path="/search" component={SearchPage}/>

                    <Route path="/kanji" component={KanjiPage}/>
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        );
    }

}

export default Main;
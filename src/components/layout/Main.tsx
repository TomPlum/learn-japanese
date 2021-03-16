import { Component } from "react";
import styles from "../../styles/sass/components/layout/Main.module.scss";
import { HashRouter, Route, Switch } from "react-router-dom";
import GamePage from "../pages/GamePage";
import SearchPage from "../pages/SearchPage";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import HelpPage from "../pages/HelpPage";
import KanjiPage from "../pages/KanjiPage";

class Main extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <HashRouter basename={process.env.REACT_APP_BASE_PATH}>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/play" component={GamePage}/>
                        <Route exact path="/search" component={SearchPage}/>
                        <Route path="/kanji" component={KanjiPage}/>
                        <Route exact path="/help" component={HelpPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </HashRouter>
            </div>
        );
    }

}

export default Main;
import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainMenuPage from "../pages/MainMenuPage";
import SearchPage from "../pages/SearchPage";
import LandingPage from "../pages/LandingPage";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";
import HelpPage from "../pages/HelpPage";
import styles from "../../styles/sass/components/layout/Main.module.scss";
import GenkiIndexPage from "../pages/GenkiIndexPage";

class Main extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <BrowserRouter basename={process.env.REACT_APP_BASE_PATH}>
                    <Switch>
                        <Route exact path="/" component={LandingPage}/>
                        <Route exact path="/menu/:mode" component={MainMenuPage}/>
                        <Route exact path="/search" component={SearchPage}/>
                        <Route exact path="/help" component={HelpPage} />
                        <Route exact path="/profile" component={ProfilePage} />
                        <Route exact path="/genki" component={GenkiIndexPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Main;

import { Route, Switch } from "react-router-dom";
import MainMenuPage from "../pages/MainMenuPage";
import SearchPage from "../pages/SearchPage";
import HelpPage from "../pages/HelpPage";
import ProfilePage from "../pages/ProfilePage";
import GenkiIndexPage from "../pages/GenkiIndexPage";
import NavigationWrapper from "./NavigationWrapper";
import NotFoundPage from "../pages/NotFoundPage";

const NavigableMain = () => {
    return (
        <div style={{ width: "100%" }}>
            <NavigationWrapper />

            <Switch>
                <Route exact path="/menu/:mode" component={MainMenuPage}/>
                <Route exact path="/search" component={SearchPage}/>
                <Route exact path="/help" component={HelpPage}/>
                <Route exact path="/profile" component={ProfilePage}/>
                <Route exact path="/genki" component={GenkiIndexPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default NavigableMain;

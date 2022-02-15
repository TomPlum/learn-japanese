import { Route, Switch } from "react-router-dom";
import MainMenuPage from "../pages/MainMenuPage";
import SearchPage from "../pages/SearchPage";
import HelpPage from "../pages/HelpPage";
import ProfilePage from "../pages/ProfilePage";
import GenkiIndexPage from "../pages/GenkiIndexPage";
import NavigationWrapper from "./NavigationWrapper";
import NotFoundPage from "../pages/NotFoundPage";
import LearnOnline from "../learn/LearnOnline";
import KanjiBankPage from "../pages/KanjiBankPage";
import ProtectedRoute from "./ProtectedRoute";
import { useUserSelector } from "../../hooks";
import GenkiGrammarPage from "../pages/GenkiGrammarPage";
import PlayPage from "../pages/PlayPage";
import LearnPage from "../pages/LearnPage";

const NavigableMain = () => {

    const user = useUserSelector(state => state.user.user);

    return (
        <NavigationWrapper>
            <Switch>
                <Route exact path="/home" component={MainMenuPage}/>
                <Route exact path="/play" component={PlayPage} />
                <Route exact path="/learn" component={LearnPage} />
                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/help" component={HelpPage} />
                <ProtectedRoute isAuthenticated={!!user} exact path="/profile" component={ProfilePage} />
                <Route exact path="/genki" component={GenkiIndexPage} />
                <Route exact path="/genki/grammar" component={GenkiGrammarPage} />
                <Route exact path="/kanji" component={KanjiBankPage} />
                <Route exact path="/learn/kanji" component={LearnOnline} />
                <Route component={NotFoundPage} />
            </Switch>
        </NavigationWrapper>
    );
}

export default NavigableMain;

import { Route, Switch } from "react-router-dom"
import HomePage from "../pages/HomePage"
import SearchPage from "../pages/SearchPage"
import HelpPage from "../pages/HelpPage"
import ProfilePage from "../pages/ProfilePage"
import GenkiIndexPage from "../pages/GenkiIndexPage"
import NavigationWrapper from "./NavigationWrapper"
import NotFoundPage from "../pages/NotFoundPage"
import LearnOnline from "../learn/LearnOnline"
import KanjiBankPage from "../pages/KanjiBankPage"
import ProtectedRoute from "./ProtectedRoute"
import { useUserSelector } from "../../hooks"
import GenkiGrammarPage from "../pages/GenkiGrammarPage"
import PlayPage from "../pages/PlayPage"
import LearnPage from "../pages/LearnPage"
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"
import HighScoresPage from "../pages/HighScoresPage"

const NavigableMain = () => {
    const user = useUserSelector((state) => state.user.user)

    return (
        <NavigationWrapper>
            <Switch>
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/play" component={PlayPage} />
                <Route exact path="/learn" component={LearnPage} />
                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/help" component={HelpPage} />
                <Route exact path="/high-scores" component={HighScoresPage} />
                <ProtectedRoute isAuthenticated={!!user} exact path="/profile" component={ProfilePage} />
                <Route exact path="/genki" component={GenkiIndexPage} />
                <Route exact path="/genki/grammar" component={GenkiGrammarPage} />
                <Route exact path="/kanji" component={KanjiBankPage} />
                <Route exact path="/learn/kanji" component={LearnOnline} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </NavigationWrapper>
    )
}

export default NavigableMain

import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import styles from "../../styles/sass/components/layout/Main.module.scss";
import NavigableMain from "./NavigableMain";

const Main = () => {
    return (
        <div className={styles.wrapper}>
            <BrowserRouter basename={process.env.REACT_APP_BASE_PATH}>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route component={NavigableMain} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Main;

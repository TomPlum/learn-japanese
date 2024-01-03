import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from "../../pages/LandingPage"
import styles  from "./Main.module.scss"
import NavigableMain from "./../NavigableMain"
import { Environment } from "../../../utility/Environment"

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter basename={Environment.variable("BASE_PATH")}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={NavigableMain} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Main

import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/sass/index.scss"
import LearnJapanese from "./LearnJapanese"

const prepareMockServiceWorker = async () => {
  if (process.env.REACT_APP_ENVIRONMENT === "msw") {
    const { worker } = require("./mocks/browser")
    return worker.start()
  }
  return Promise.resolve()
}

prepareMockServiceWorker().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <LearnJapanese />
    </React.StrictMode>
  )
})

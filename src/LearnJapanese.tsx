import "./styles/sass/LearnJapanese.module.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css"
import Main from "./components/layout/Main"
import { Location } from "history"
import { Provider } from "react-redux"
import { EnhancedStore } from "@reduxjs/toolkit"
import "./i18n"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "components/pages/LandingPage";
import HomePage from "components/pages/HomePage";
import PlayPage from "components/pages/PlayPage";
import LearnPage from "components/pages/LearnPage";
import SearchPage from "components/pages/SearchPage";
import HelpPage from "components/pages/HelpPage";
import HighScoresPage from "components/pages/HighScoresPage";
import GenkiIndexPage from "components/pages/GenkiIndexPage";
import GenkiGrammarPage from "components/pages/GenkiGrammarPage";
import KanjiBankPage from "components/pages/KanjiBankPage";
import LearnOnline from "components/learn/LearnOnline";
import RegisterPage from "components/pages/RegisterPage";
import LoginPage from "components/pages/LoginPage";
import NotFoundPage from "components/pages/NotFoundPage";
import ProtectedRoute from "components/layout/ProtectedRoute";
import ProfilePage from "components/pages/ProfilePage";

interface LearnJapaneseProps {
  store: EnhancedStore
  location?: Location
}

export const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/play',
        element: <PlayPage />
      },
      {
        path: '/learn',
        element: <LearnPage />,
        children: [
          {
            path: '/learn/kanji',
            element: <LearnOnline />
          }
        ]
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/help',
        element: <HelpPage />
      },
      {
        path: '/high-scores',
        element: <HighScoresPage />
      },
      {
        path: '/genki',
        element: <GenkiIndexPage />
      },
      {
        path: '/genki/grammar',
        element: <GenkiGrammarPage />
      },
      {
        path: '/kanji',
        element: <KanjiBankPage />
      },
      {
        path: '/register',
        element: <RegisterPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/profile',
            element: <ProfilePage />
          }
        ]
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
], { basename: import.meta.env.VITE_BASE_PATH  })

const LearnJapanese = (props: LearnJapaneseProps) => {
  const { store } = props

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default LearnJapanese

import "./styles/sass/LearnJapanese.module.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css"
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
import NavigationWrapper from "components/layout/NavigationWrapper";
import SessionSettingsProvider from "context/SessionSettingsContext";
import FontProvider from "context/FontContext";
import NotificationProvider from "context/NotificationContext";

interface LearnJapaneseProps {
  store: EnhancedStore
  location?: Location
}

export const routerConfig = [
  {
    element: <NavigationWrapper />,
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
        element: <LearnPage />
      },
      {
        path: '/learn/kanji',
        element: <LearnOnline />
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
]

export const router = createBrowserRouter(routerConfig, {
  basename: import.meta.env.VITE_BASE_PATH
})

const LearnJapanese = ({ store }: LearnJapaneseProps) => {
  return (
    <Provider store={store}>
      <SessionSettingsProvider>
        <NotificationProvider>
          <FontProvider>
            <RouterProvider router={router} />
          </FontProvider>
        </NotificationProvider>
      </SessionSettingsProvider>
    </Provider>
  )
}

export default LearnJapanese

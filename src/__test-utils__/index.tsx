import { render as rtlRender } from '@testing-library/react'
import { PropsWithChildren, ReactElement } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "__test-utils__/i18n-testing.ts";
import { Provider } from "react-redux";
import { store as defaultStore } from "../store.ts";

export interface RenderProps {

}

const render = (component: ReactElement, { }: RenderProps = {}) => {
  const Wrapper = ({ children }: PropsWithChildren) => (
    <I18nextProvider i18n={i18n} defaultNS="translation">
      <Provider store={defaultStore}>
        {children}
      </Provider>
    </I18nextProvider>
  )

  return rtlRender(component, { wrapper: Wrapper })
}

export {
  render
}
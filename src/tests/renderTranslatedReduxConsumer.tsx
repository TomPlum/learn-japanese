import React, { ReactElement, ReactNode } from "react";
import ConditionalWrapper from "../components/ui/ConditionalWrapper";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { store as defaultStore } from "../store";
import { render } from "@testing-library/react";
import i18n from "./i18n-testing";

const renderTranslatedReduxConsumer = (component: ReactElement, disableTranslations?: boolean) => {
    const Wrapper = (props: { children?: ReactNode }) => (
        <ConditionalWrapper condition={!disableTranslations} wrapper={children => {
            return (
                <I18nextProvider i18n={i18n} defaultNS="translation">
                    {children}
                </I18nextProvider>
            )
        }}>
            <Provider store={defaultStore}>
                {props.children}
            </Provider>
        </ConditionalWrapper>

    );

    return render(component, { wrapper: Wrapper });
}

export default renderTranslatedReduxConsumer;

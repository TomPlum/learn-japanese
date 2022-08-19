import React, { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n-testing";

const renderWithTranslation = (component: ReactElement) => {
    const Wrapper = (props: { children?: ReactNode }) => (
        <I18nextProvider i18n={i18n} defaultNS="translation">
            {props.children}
        </I18nextProvider>
    );
    return render(component, { wrapper: Wrapper });
}

export default renderWithTranslation;


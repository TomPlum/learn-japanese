import React, { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store as defaultStore } from '../store'
import { Store } from "redux";


const renderReduxConsumer = (component: ReactElement, store?: Store, initialState?: {}) => {
    const Wrapper = (props: { children?: ReactNode }) => (
        <Provider store={store ? store : defaultStore}>
            {props.children}
        </Provider>
    );
    return render(component, { wrapper: Wrapper });
}

export default renderReduxConsumer;


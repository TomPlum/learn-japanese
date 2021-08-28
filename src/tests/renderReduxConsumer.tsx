import React, { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store'


const renderReduxConsumer = (component: ReactElement) => {
    const Wrapper = (props: { children?: ReactNode }) => (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
    return render(component, { wrapper: Wrapper });
}

export default renderReduxConsumer;


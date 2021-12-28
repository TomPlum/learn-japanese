import { Redirect, Route, RouteProps } from "react-router-dom";
import React from "react";

export interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
    return (
        <Route render={(route) => {
            if (!props.isAuthenticated) {
                return <Redirect to={{ pathname: '/menu/learn', state: { from: route.location } }} />;
            }

            if (props.component) {
                return React.createElement(props.component);
            }

            if (props.render) {
                return props.render(route);
            }
        }} />
    );
}

export default ProtectedRoute;

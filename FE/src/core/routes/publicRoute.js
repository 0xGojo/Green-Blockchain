import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, auth, ...rest }) => (
    <Route { ...rest } 
        render={
            (props) => (
                !auth.isAuthenticated
                ? <Component { ...props } />
                : <Redirect to={ {pathname: auth.pathName, state: {from: props.location}} } />
            )
        }
    />
);

export default PublicRoute;

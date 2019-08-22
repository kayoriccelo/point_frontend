import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// 
// TODO: Kayo Riccelo - substitui a verificação do token para redux 
// 

export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('access') !== null ?
                    (<Component {...props} />) :
                    (<Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />)
            }
        />
    );
};

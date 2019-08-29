import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { routes } from './routes';
import { loadUser } from '../auth/store/ducks';


const PrivateRoute = ({ login, isAuthenticated, component: Component, history, loadUser, ...rest }) => {
    useEffect(() => {
        (login && !isAuthenticated) && loadUser(history)
    }, [login, isAuthenticated, history, loadUser]);

    return (
        <Route {...rest} render={props =>
            isAuthenticated
                ? (<Component {...props} />)
                : (<Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }} />
                )}
        />
    );
};

export { routes };

const mapStateToProps = ({ login, auth }) => ({ login, isAuthenticated: auth.user.isAuthenticated });
const mapDispatchToProps = (dispatch) => bindActionCreators({ loadUser }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);

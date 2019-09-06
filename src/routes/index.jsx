import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { routes } from './routes';
import { loadUser } from '../auth/store/ducks';


const PrivateRoute = ({ isAuthenticated, component: Component, history, loadUser, ...rest }) => {
    useEffect(() => {
        (localStorage.getItem('access') && !isAuthenticated) && loadUser(history)
    }, [isAuthenticated, history, loadUser]);

    return (
        <Route {...rest} render={props =>
            isAuthenticated
                ? (<Component {...props} />)
                : (<Redirect
                    to={{
                        pathname: "/signin",
                        state: { from: props.location }
                    }} />
                )}
        />
    );
};

export { routes };

const mapStateToProps = ({ auth }) => ({ isAuthenticated: auth.user.isAuthenticated });
const mapDispatchToProps = (dispatch) => bindActionCreators({ loadUser }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);

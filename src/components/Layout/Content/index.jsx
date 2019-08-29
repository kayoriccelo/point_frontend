import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';

import useStyles from './styles';
import PrivateRoute, { routes } from '../../../routes';


export const Content = ({ user, history }) => {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <div className={classes.appBarSpacer} />
            <div className={classes.content}>
                <Switch>
                    {routes.map(route => {
                        if (route.roles.indexOf(user.role) > -1) {
                            return <PrivateRoute {...route} history={history} />
                        };
                        
                        return false
                    })}
                    <Redirect from="/" to="/dashboard" />
                </Switch>
            </div>
        </div>
    );
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });
export default connect(mapStateToProps, null)(Content);

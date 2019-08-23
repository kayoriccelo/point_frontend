import React from 'react';
import List from './List';
import Form from './Form';


export const ListEmployeePoint = ({ history }) => <List history={history}/>;

export const ConsultPoint = ({ history, match }) => <Form history={history} match={match}/>;

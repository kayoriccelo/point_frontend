import React from 'react';

import List from './List';
import Form from './Form';


export const ListEmployee = ({ history }) => <List history={history} />;

export const FormEmployee = ({ match, history }) => <Form id={match.params.id} history={history} />;

import React from 'react';

import List from './List';
import Form from './Form';


export const ListJourney = ({ history }) => <List history={history} />;

export const FormJourney = ({ match, history }) => <Form id={match.params.id} history={history} />;

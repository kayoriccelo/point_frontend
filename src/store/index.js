import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import history from './history';

const middleware = routerMiddleware(history);
const store = createStore(reducers, applyMiddleware(middleware, thunk));

export default store;
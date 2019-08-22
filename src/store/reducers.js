import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sidebarReducer from '../components/Layout/Sidebar/store/ducks';
import headerReducer from '../components/Layout/Header/store/ducks';

const reducers = combineReducers({
    router: routerReducer,
    sidebar: sidebarReducer,
    header: headerReducer
});

export default reducers;

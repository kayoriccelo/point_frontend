import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import loginReducer from '../apps/Login/store/ducks';
import sidebarReducer from '../components/Layout/Sidebar/store/ducks';
import headerReducer from '../components/Layout/Header/store/ducks';
import messageReducer from '../components/Message/store/ducks';


const reducers = combineReducers({
    router: routerReducer,
    login: loginReducer,
    sidebar: sidebarReducer,
    header: headerReducer,
    message: messageReducer,
});

export default reducers;

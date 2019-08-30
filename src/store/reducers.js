import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import loginReducer from '../apps/Login/store/ducks';
import signupReducer from '../apps/SignUp/store/ducks';
import authReducer from '../auth/store/ducks';
import sidebarReducer from '../components/Layout/Sidebar/store/ducks';
import headerReducer from '../components/Layout/Header/store/ducks';
import messageReducer from '../components/Message/store/ducks';
import paginationReducer from '../components/TablePagination/store/ducks';
import dashboardReducer from '../apps/Dashboard/store/ducks';
import companyReducer from '../apps/Company/store/ducks';
import journeyReducer from '../apps/Journey/store/ducks';
import employeeReducer from '../apps/Employee/store/ducks';
import pointMarkingReducer from '../apps/PointMarking/store/ducks';
import consultPointReducer from '../apps/ConsultPoint/store/ducks';
import mypointsReducer from '../apps/MyPoints/store/ducks';


const reducers = combineReducers({
    router: routerReducer,
    login: loginReducer,
    signup: signupReducer,
    auth: authReducer,
    sidebar: sidebarReducer,
    header: headerReducer,
    message: messageReducer,
    pagination: paginationReducer,
    dashboard: dashboardReducer,
    company: companyReducer,
    journey: journeyReducer,
    employee: employeeReducer,
    pointmarking: pointMarkingReducer,
    consultpoint: consultPointReducer,
    mypoints: mypointsReducer
});

export default reducers;

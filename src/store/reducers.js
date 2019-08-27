import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import loginReducer from '../apps/Login/store/ducks';
import signupReducer from '../apps/SignUp/store/ducks';
import sidebarReducer from '../components/Layout/Sidebar/store/ducks';
import headerReducer from '../components/Layout/Header/store/ducks';
import messageReducer from '../components/Message/store/ducks';
import paginationReducer from '../components/TablePagination/store/ducks';
import companyReducer from '../apps/Company/store/ducks';
import journeyReducer from '../apps/Journey/store/ducks';
import employeeReducer from '../apps/Employee/store/ducks';
import pointMarkingReducer from '../apps/PointMarking/store/ducks';
import consultPointReducer from '../apps/ConsultPoint/store/ducks';


const reducers = combineReducers({
    router: routerReducer,
    login: loginReducer,
    signup: signupReducer,
    sidebar: sidebarReducer,
    header: headerReducer,
    message: messageReducer,
    pagination: paginationReducer,
    company: companyReducer,
    journey: journeyReducer,
    employee: employeeReducer,
    pointmarking: pointMarkingReducer,
    consultpoint: consultPointReducer,
});

export default reducers;

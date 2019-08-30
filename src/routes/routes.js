import Dashboard from '../apps/Dashboard';
import { FormCompany } from '../apps/Company';
import { ListJourney, FormJourney } from '../apps/Journey';
import { ListEmployee, FormEmployee } from '../apps/Employee';
import { PointMarking } from '../apps/PointMarking';
import { ListEmployeePoint, ConsultPoint } from '../apps/ConsultPoint';
import { MyPoints } from '../apps/MyPoints';


export const routes = [
    {
        key: 'dashboard',
        exact: true,
        path: '/dashboard',
        component: Dashboard,
        roles: ['guest', 'admin']
    },
    {
        key: 'registration-company',
        exact: true,
        path: '/registration/company',
        component: FormCompany,
        roles: ['admin']
    },
    {
        key: 'registration-journey-form',
        exact: true,
        path: '/registration/journey/:id',
        component: FormJourney,
        roles: ['admin']
    },
    {
        key: 'registration-journey',
        exact: true,
        path: '/registration/journey',
        component: ListJourney,
        roles: ['admin']
    },
    {
        key: 'registration-employee-form',
        exact: true,
        path: '/registration/employee/:id',
        component: FormEmployee,
        roles: ['admin']
    },
    {
        key: 'registration-employee',
        exact: true,
        path: '/registration/employee',
        component: ListEmployee,
        roles: ['admin']
    },
    {
        key: 'consult-point',
        exact: true,
        path: '/consultpoint/:cpf/:start/:end',
        component: ConsultPoint,
        roles: ['admin']
    },
    {
        key: 'employee-point',
        exact: true,
        path: '/consultpoint',
        component: ListEmployeePoint,
        roles: ['admin']
    },
    {
        key: 'my-points',
        exact: true,
        path: '/mypoints',
        component: MyPoints,
        roles: ['guest']
    },
    {
        key: 'point-marking',
        exact: true,
        path: '/pointmarking',
        component: PointMarking,
        roles: ['guest', 'admin']
    },
];

import Dashboard from '../apps/Dashboard';
import { FormCompany } from '../apps/Company';
import { ListJourney } from '../apps/Journey';

export const routes = [
    {
        key: 'dashboard',
        exact: true,
        path: '/dashboard',
        component: Dashboard,
    },
    {
        key: 'registration-company',
        exact: true,
        path: '/registration/company',
        component: FormCompany,
    },
    {
        key: 'registration-journey',
        exact: true,
        path: '/registration/journey',
        component: ListJourney,
    },
];

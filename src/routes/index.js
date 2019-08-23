import Dashboard from '../apps/Dashboard';
import { FormCompany } from '../apps/Company';
import { ListJourney, FormJourney } from '../apps/Journey';

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
        key: 'registration-journey-form',
        exact: true,
        path: '/registration/journey/:id',
        component: FormJourney,
    },
    {
        key: 'registration-journey',
        exact: true,
        path: '/registration/journey',
        component: ListJourney,
    },
];

import Dashboard from '../apps/Dashboard';
import { FormCompany } from '../apps/Company';


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
];

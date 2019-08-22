import React from 'react';
import { Dashboard, ViewList, Business } from "@material-ui/icons";


export const menus = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: (<Dashboard />)
    },
    {
        title: 'Registration',
        path: '/registration',
        icon: (<ViewList />),
        menus: [
            {
                title: 'Company',
                path: '/registration/company',
                icon: (<Business />)
            }
        ]
    },
];

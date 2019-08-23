import React from 'react';
import { Dashboard, ViewList, Business, Today, People, Fingerprint, WatchLater } from "@material-ui/icons";


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
            },
            {
                title: 'Journey',
                path: '/registration/journey',
                icon: (<WatchLater />)
            },
            {
                title: 'Employee',
                path: '/registration/employee',
                icon: (<People />)
            },
        ]
    },
    {
        title: 'Consult Point',
        path: '/consultpoint',
        icon: (<Today />)
    },
    {
        title: 'Point Marking',
        path: '/pointmarking',
        icon: (<Fingerprint />)
    },
];

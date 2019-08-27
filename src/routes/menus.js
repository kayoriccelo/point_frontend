import React from 'react';
import { Dashboard, ViewList, Business, Today, People, Fingerprint, WatchLater } from "@material-ui/icons";


export const menus = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: (<Dashboard style={{ color: '#24292e' }} />),
        roles: ['guest', 'admin']
    },
    {
        title: 'Registration',
        path: '/registration',
        icon: (<ViewList style={{ color: '#24292e' }} />),
        roles: ['admin'],
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
        icon: (<Today style={{ color: '#24292e' }} />),
        roles: ['admin'],
    },
    {
        title: 'Point Marking',
        path: '/pointmarking',
        icon: (<Fingerprint style={{ color: 't#24292eeal' }} />),
        roles: ['guest', 'admin']
    },
];

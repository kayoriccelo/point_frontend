import React from 'react';
import { Dashboard, ViewList, Business, Today, People, Fingerprint, WatchLater } from "@material-ui/icons";


export const menus = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: (<Dashboard style={{ color: '#00b300' }} />)
    },
    {
        title: 'Registration',
        path: '/registration',
        icon: (<ViewList style={{ color: '#24292e' }} />),
        menus: [
            {
                title: 'Company',
                path: '/registration/company',
                icon: (<Business style={{ color: '#cc2900' }}/>)
            },
            {
                title: 'Journey',
                path: '/registration/journey',
                icon: (<WatchLater style={{ color: '#ff9900' }}/>)
            },
            {
                title: 'Employee',
                path: '/registration/employee',
                icon: (<People style={{ color: '#00004d' }}/>)
            },
        ]
    },
    {
        title: 'Consult Point',
        path: '/consultpoint',
        icon: (<Today style={{color: '#3399ff'}} />)
    },
    {
        title: 'Point Marking',
        path: '/pointmarking',
        icon: (<Fingerprint style={{color: 'teal'}} />)
    },
];

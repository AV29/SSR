import React from 'react';
import Home from './components/Home';
import Users from './components/Users';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/users',
        component: Users
    }
];

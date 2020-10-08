import React from 'react';
import Home from './components/Home';
import Users, { loadData } from './components/Users';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: Users
    }
];

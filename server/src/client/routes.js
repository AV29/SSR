import React from 'react';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';

export default [
    {
        ...HomePage,
        path: '/',
        exact: true
    },
    {
        ...UsersPage,
        path: '/users'
    }
];

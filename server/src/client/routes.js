import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersPage,
                path: '/users'
            }
        ]
    }
];

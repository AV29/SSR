import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';

const App = props => {
    return (
        <div>
            <Header auth={props.auth} />
            {renderRoutes(props.route.routes)}
        </div>
    );
};

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};

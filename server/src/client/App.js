import React from 'react';
import { renderRoutes } from 'react-router-config';

const App = props => {
    return (
        <div>
            <h1>Shit!</h1>
            {renderRoutes(props.route.routes)}
        </div>
    );
};

export default {
    component: App
};

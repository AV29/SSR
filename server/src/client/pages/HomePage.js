import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <div>I'm the super-duper home component</div>
            <button onClick={console.log}>
                <Link to={"/users"}>Press Me!</Link>
            </button>
        </div>
    );
};

export default {
    component: HomePage
};

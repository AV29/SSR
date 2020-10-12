import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default BaseComponent => {

    const RequireAuth = props => {
        switch(props.auth) {
            case false:
                return <Redirect to="/" />;

            case null:
                return <div>Loading...</div>;

            default:
                return <BaseComponent {...props} />
        }
    };

    return connect(({ auth }) => ({ auth }))(RequireAuth);
};

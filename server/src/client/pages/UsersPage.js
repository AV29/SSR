import React, { useEffect } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

const UsersPage = props => {

    useEffect(() => {
        props.fetchUsers();
    }, []);

    const head = () => (
        <Helmet>
            <title>{`${props.users.length} Users Loaded`}</title>
            <meta property="og:title" content="Users App" />
        </Helmet>
    );

    return (
        <div>
            {head()}
            Here's a list of users
            <ul>
                {props.users.map(user => (
                    <li key={user.id} onClick={() => console.log(user.name)}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
});

UsersPage.propTypes = {
    users: arrayOf(shape({
        id: number,
        name: string
    }))
};

export default {
    component: connect(mapStateToProps, mapDispatchToProps)(UsersPage),
    loadData: ({ dispatch }) => dispatch(fetchUsers())
};

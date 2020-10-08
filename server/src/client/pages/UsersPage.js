import React, { useEffect } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

const UsersPage = props => {

    useEffect(() => {
        props.fetchUsers();
    }, []);

    return (
        <div>
            Here's a list of users
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>{user.name}</li>
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

export const loadData = store => store.dispatch(fetchUsers());

UsersPage.propTypes = {
    users: arrayOf(shape({
        id: number,
        name: string
    }))
};

export default {
    component: connect(mapStateToProps, mapDispatchToProps)(UsersPage),
    loadData
};

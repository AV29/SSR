import React, { useEffect } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

const Users = props => {

    useEffect(() => {
        props.fetchUsers();
    }, []);

    return (
        <div>
            Here's a list of users
            {props.users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
});

export const loadData = () => {
    console.log('Loading!');
};

Users.propTypes = {
    users: arrayOf(shape({
        id: number,
        name: string
    }))
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

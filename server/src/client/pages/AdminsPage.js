import React, { useEffect } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

const AdminsPage = props => {

    useEffect(() => {
        props.fetchAdmins();
    }, []);

    return (
        <div>
            <h3>Protected list of Admins</h3>
            <ul>
                {props.admins.map(admin => (
                    <li key={admin.id}>{admin.name}</li>
                ))}
            </ul>
        </div>
    );
};

AdminsPage.propTypes = {
    admins: arrayOf(shape({
        id: number,
        name: string
    }))
};

export default {
    component: connect(
        ({ admins }) => ({ admins }),
        { fetchAdmins }
    )(AdminsPage),
    loadData: ({ dispatch }) => dispatch(fetchAdmins())
};

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const linkStyle = {
    margin: '0 10px',
    color: 'white',
    textDecoration: 'none'
};

const headerStyle = {
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid lightgrey',
    borderRadius: 4,
    backgroundColor: 'tomato',
    color: 'white',
    marginBottom: 10
};

const Header = props => {
    return (
        <div style={headerStyle}>
            <Link to="/" style={linkStyle}>React SSR</Link>
            <div>
                <Link to={"/users"} style={linkStyle}>Users</Link>
                <Link to={"/admins"} style={linkStyle}>Admins</Link>
                {props.auth ?
                    <a href="/api/logout" style={linkStyle}>Logout</a> :
                    <a href="/api/auth/google" style={linkStyle}>Login</a>
                }
            </div>
        </div>
    );
};

export default connect(({ auth }) => ({ auth }))(Header);

import { combineReducers } from 'redux';
import usersReducers from './usersReducers';
import authReducers from './authReducers';

export default combineReducers({
    auth: authReducers,
    users: usersReducers
});
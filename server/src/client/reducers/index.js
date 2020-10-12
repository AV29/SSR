import { combineReducers } from 'redux';
import authReducers from './authReducers';
import usersReducers from './usersReducers';
import adminReducers from './adminReducers';

export default combineReducers({
    admins: adminReducers,
    auth: authReducers,
    users: usersReducers
});
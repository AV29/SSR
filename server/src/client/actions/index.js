import axios from 'axios';

const API_ENDPOINT = 'http://react-ssr-api.herokuapp.com';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => async dispatch => {
    const res = await axios.get(`${API_ENDPOINT}/users`);

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};
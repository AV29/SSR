import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { API_ENDPOINT } from '../constants';
import reducers from '../client/reducers';

const axiosInstance = axios.create({
    baseURL: API_ENDPOINT
});

export default req => {
    axiosInstance.defaults.headers.cookie = req.get('cookie') || '';

    return createStore(
        reducers,
        {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance)));
};

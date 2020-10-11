import { FETCH_CURRENT_USER } from '../actions';

export default (state = false, action) => {
    switch(action.type) {
        case FETCH_CURRENT_USER:
            return action.payload.data || false;

        default:
            return state;
    }
};

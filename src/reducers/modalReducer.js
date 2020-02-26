import { ADD_TOAST, REMOVE_TOAST } from '../constants/actionTypes';

export const modalReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TOAST:
            return [action.payload, ...state];
        case REMOVE_TOAST:
            return state.filter(toast => toast.id !== action.payload);
        default:
            return state;
    }
};

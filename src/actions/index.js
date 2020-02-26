import { ADD_TOAST, REMOVE_TOAST } from '../constants/actionTypes';
import createToast from '../helpers/createToast';

export const showModal = (modal) => {
    return {
        type: ADD_TOAST,
        payload: createToast(modal)
    };
};

export const closeModal = (id) => {
    return {
        type: REMOVE_TOAST,
        payload: id
    };
};

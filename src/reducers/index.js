import { combineReducers } from 'redux';

import { modalReducer } from './modalReducer';

export default combineReducers({
    toasts: modalReducer
})

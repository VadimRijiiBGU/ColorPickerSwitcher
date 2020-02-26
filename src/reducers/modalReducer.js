const internalModal = {
    isShown: false,
    text: null
};

export const modalReducer = (state = internalModal, action) => {
    if (action.type === 'SHOW_MODAL') {
        return Object.assign({}, action.payload);
    } else if (action.type === 'CLOSE_MODAL') {
        return { isShown: false };
    }

    return state;
};

export const showModal = (modal) => {
    return {
        type: 'SHOW_MODAL',
        payload: modal
    };
};

export const closeModal = (modal) => {
    return {
        type: 'CLOSE_MODAL',
        payload: modal
    };
};

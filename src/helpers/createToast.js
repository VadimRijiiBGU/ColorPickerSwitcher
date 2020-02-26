let id = 0;

export default (toast) => {
    return {
        ...toast,
        id: id++
    };
}

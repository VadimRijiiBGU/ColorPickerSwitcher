export default ({ r, g, b }) => {
    const k = Math.min((1 - r/255), (1 - g/255), (1 - b/255));
    const c = (1 - r/255 - k) / (1 - k);
    const m = (1 - g/255 - k) / (1 - k);
    const y = (1 - b/255 - k) / (1 - k);

    return { c, m, y, k };
}

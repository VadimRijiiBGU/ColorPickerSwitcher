export default ({ x, y, z }) => {
    let var_X = x / 100;
    let var_Y = y / 100;
    let var_Z = z / 100;

    let var_R = var_X *  3.2406 + var_Y * (-1.5372) + var_Z * (-0.4986);
    let var_G = var_X * (-0.9689) + var_Y *  1.8758 + var_Z *  0.0415;
    let var_B = var_X *  0.0557 + var_Y * (-0.2040) + var_Z *  1.0570;

    if ( var_R > 0.0031308 ) {
        var_R = (1.055 * Math.pow(var_R, ( 1 / 2.4 ))) - 0.055;
    }
    else {
        var_R = 12.92 * var_R;
    }
    if ( var_G > 0.0031308 ) {
        var_G = (1.055 * Math.pow(var_G, ( 1 / 2.4 ))) - 0.055;
    }
    else {
        var_G = 12.92 * var_G;
    }
    if ( var_B > 0.0031308 ) {
        var_B = (1.055 * Math.pow(var_B, ( 1 / 2.4 ))) - 0.055;
    }
    else {
        var_B = 12.92 * var_B;
    }

    const r = var_R * 255;
    const g = var_G * 255;
    const b = var_B * 255;

    return { r, g, b };
}

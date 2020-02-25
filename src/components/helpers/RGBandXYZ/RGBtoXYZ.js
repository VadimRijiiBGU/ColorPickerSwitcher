export default  ({ r, g, b }) => {
    let var_R = ( r / 255 );
    let var_G = ( g / 255 );
    let var_B = ( b / 255 );

    if ( var_R > 0.04045 ) {
        var_R = Math.pow(((var_R + 0.055 ) / 1.055 ), 2.4);
    }
    else {
        var_R = var_R / 12.92;
    }
    if ( var_G > 0.04045 ) {
        var_G = Math.pow(((var_G + 0.055 ) / 1.055 ), 2.4);
    }
    else {
        var_G = var_G / 12.92;
    }
    if ( var_B > 0.04045 ) {
        var_B = Math.pow(((var_B + 0.055 ) / 1.055 ), 2.4);
    }
    else {
        var_B = var_B / 12.92;
    }

    var_R = var_R * 100;
    var_G = var_G * 100;
    var_B = var_B * 100;

    const x = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805;
    const y = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722;
    const z = var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505;

    return { x, y, z };
}

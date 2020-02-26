import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Badge } from 'react-bootstrap';

import Form from '../Form';
import ColorPicker from './ColorPicker';
import RGBtoXYZ from '../../helpers/RGBandXYZ/RGBtoXYZ';
import XYZtoRGB from '../../helpers/RGBandXYZ/XYZtoRGB';
import RGBtoCMYK from '../../helpers/RGBandCMYK/RGBtoCMYK';
import CMYKtoRGB from '../../helpers/RGBandCMYK/CMYKtoRGB';

import './index.css';

const RGB = {
    r: 255,
    g: 0,
    b: 0
};

const XYZ = {
    x: 0,
    y: 0,
    z: 0
};

const CMYK = {
    c: 0,
    m: 0,
    y: 0,
    k: 0
};

class ChoseColor extends React.Component {
    state = {RGB, XYZ, CMYK};

    onRGBInputChange = (event) => {
        const element = event.target.id;
        const value = event.target.value;
        RGB[element] = +value;
        const XYZ = RGBtoXYZ(RGB);
        const CMYK = RGBtoCMYK(RGB);
        this.setState({ RGB, XYZ, CMYK });
    };

    onXYZInputChange = (event) => {
        const element = event.target.id;
        const value = event.target.value;
        XYZ[element] = +value;
        const RGB = XYZtoRGB(XYZ);
        const CMYK = RGBtoCMYK(RGB);
        this.setState({ RGB, XYZ, CMYK });
    };

    onCMYKInputChange = (event) => {
        const element = event.target.id;
        const value = event.target.value;
        CMYK[element] = +value;
        const RGB = CMYKtoRGB(CMYK);
        const XYZ = RGBtoXYZ(RGB);
        this.setState({ RGB, XYZ, CMYK });
    };

    colorPickerChange = (color) => {
        const RGB = color.rgb;
        const XYZ = RGBtoXYZ(RGB);
        const CMYK = RGBtoCMYK(RGB);
        this.setState({ RGB, XYZ, CMYK });
    };

    render() {
        return (
            <Container className="home">
                <h1 className="panel-header">
                    Try this <Badge variant="secondary">ColorPicker</Badge>
                </h1>
                <Row>
                    <Col><Form text={['r', 'g', 'b']} value={this.state.RGB} validate={{ min: 0, max: 255 }} onInputChange={this.onRGBInputChange} /></Col>
                    <ColorPicker
                        color={this.state.RGB}
                        colorChanged={this.colorPickerChange}
                    />
                    <Col><Form text={['x', 'y', 'z']} value={this.state.XYZ} validate={{ min: 0, max: 1 }} onInputChange={this.onXYZInputChange} /></Col>
                </Row>
                <Row className="cmyk-row">
                    <Col className="cmyk-col"><Form text={['c', 'm', 'y', 'k']} value={this.state.CMYK} validate={{ min: 0, max: 1 }} onInputChange={this.onCMYKInputChange} /></Col>
                </Row>
            </Container>
        );
    }
}

export default ChoseColor;

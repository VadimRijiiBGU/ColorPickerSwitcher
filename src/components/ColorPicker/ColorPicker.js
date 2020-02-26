import React from 'react';
import { ChromePicker } from 'react-color';

class ColorPicker extends React.Component {
    handleChangeComplete = (color) => {
        this.props.colorChanged(color);
    };

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5em' }}>
                <ChromePicker
                    color={this.props.color}
                    onChangeComplete={ this.handleChangeComplete }
                    width='25em'
                />
            </div>
        );
    }
}

export default ColorPicker;

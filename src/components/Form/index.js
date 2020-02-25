import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { InputGroup, FormControl } from 'react-bootstrap';

class Form extends React.Component {
    renderForm() {
        return this.props.text.map(item => {
            return (
                <div key={item}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">{item}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                     id={item}
                                     onChange={this.props.onInputChange}
                                     value={`${this.props.value[item]}`}
                                     type='number'
                                     min={this.props.validate.min}
                                     max={this.props.validate.max}
                        />
                    </InputGroup>
                    <br />
                </div>
            );
        })
    }

    render() {
        return(
            <div>{this.renderForm()}</div>
        );
    }
}

export default Form;

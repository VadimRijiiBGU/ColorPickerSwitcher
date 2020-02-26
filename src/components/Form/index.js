import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { InputGroup, FormControl } from 'react-bootstrap';

class Form extends React.Component {
    state = { error: null };

    onInput = (event) => {
        this.validateInput(event);
        this.props.onInputChange(event);
    };

    validateInput = (event) => {
        if (event.target.value > this.props.validate.max || event.target.value < this.props.validate.min) {
            this.setState({ error: {...this.state.error, [event.target.id]: `Must be greater than ${this.props.validate.min} and less than ${this.props.validate.max}`}})
        } else {
            this.setState({ error: {...this.state.error, [event.target.id]: null }});
        }
    };

    renderForm() {
        return this.props.text.map(item => {
            return (
                <div key={item} className="form-group">
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">{item.toUpperCase()}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            className={`form-control ${(this.state.error && this.state.error[item]) ? 'is-invalid' : ''}`}
                            aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                            id={item}
                            onChange={this.onInput}
                            placeholder={`${this.props.value[item]}`}
                            type='number'
                            min={this.props.validate.min}
                            max={this.props.validate.max}
                        />
                        <div className="invalid-feedback">
                            {this.state.error && this.state.error[item]}
                        </div>
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

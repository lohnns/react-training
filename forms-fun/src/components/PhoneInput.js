import React, {Component} from 'react';
import propTypes from 'prop-types';

class PhoneInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        }
    }

    handlePhone = ({target: {value}}) => {
        value = value
            .replace(/\D+/, '')
            .slice(0, 10)
            // Add a space after any 2-digit group followed by more digits
            .replace(/(\d{2})(?=\d)/g, '$1 ')
        this.setState({ phone: value })
    }

    render() {
        return <input type='text' value={this.state.phone} onChange={this.handlePhone}/>
    }

}

PhoneInput.propTypes = {
}

export default PhoneInput;
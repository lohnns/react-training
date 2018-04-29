import React, {Component} from 'react';
import propTypes from 'prop-types';

import './LetterButton.css';

class LetterButton extends Component {

    constructor(props) {
        super(props);
        const { guessLetter, letter } = this.props;
        this.onClick = () => guessLetter(letter);
        this.state = { used: false };
    }

    handleClick() {
        this.onClick();
        this.setState({ used: true });
    }

    render() {
        const { letter } = this.props;
        return (
            <span>
            {
                this.state.used ? <span className='letter-button used'>{letter}</span>
                    : <span className='letter-button available' onClick={() => this.handleClick()}>{letter}</span>
            }
            </span>
        );
    }

}

LetterButton.propTypes = {
    letter: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired
}

export default LetterButton;
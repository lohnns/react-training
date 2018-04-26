import React, {Component} from 'react';

import './LetterButton.css';

const LetterButton = ({letter, used, guessLetter}) => (
    <span>
    {
        used ? <span className='letter-button used'>{letter}</span>
            : <span className='letter-button available' onClick={() => guessLetter(letter)}>{letter}</span>
    }
    </span>
);

export default LetterButton;
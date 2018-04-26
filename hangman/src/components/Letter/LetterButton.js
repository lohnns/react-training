import React from 'react';

import './LetterButton.css';

const LetterButton = ({letter, status, guessLetter}) => (
    <span className={`letter-button ${status}`} onClick={() => guessLetter(letter)}>{letter}</span>
);

export default LetterButton;
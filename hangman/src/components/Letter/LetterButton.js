import React from 'react';

import './LetterButton.css';

const LetterButton = ({letter, status}) => (
    <span className={`letter-button ${status}`}>{letter}</span>
);

export default LetterButton;
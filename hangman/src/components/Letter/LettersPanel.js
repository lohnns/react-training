import React from 'react';

import './LettersPanel.css';
import Letter from "./LetterButton";

const LETTERS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

const LettersPanel = ({guessLetter}) => (
    <div className='letters-panel'>
        <div className='letters-bar'>
        {
            LETTERS.slice(0, LETTERS.length/2)
                .map(letter => <Letter letter={letter} guessLetter={guessLetter}/>)
        }
        </div>
        <div className='letters-bar'>
        {
            LETTERS.slice(LETTERS.length/2, LETTERS.length)
                .map(letter => <Letter letter={letter} guessLetter={guessLetter}/>)
        }
        </div>
    </div>
);

export default LettersPanel;

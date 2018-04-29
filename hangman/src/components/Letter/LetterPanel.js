import React from 'react';

import Letter from "./LetterButton";

import './LetterPanel.css';

const LETTERS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

const LetterPanel = ({guessLetter}) => (
    <div className='letter-panel'>
        <div className='letter-bar'>
        {
            LETTERS.slice(0, LETTERS.length/2)
                .map(letter => <Letter letter={letter} guessLetter={guessLetter}/>)
        }
        </div>
        <div className='letter-bar'>
        {
            LETTERS.slice(LETTERS.length/2, LETTERS.length)
                .map(letter => <Letter letter={letter} guessLetter={guessLetter}/>)
        }
        </div>
    </div>
);

export default LetterPanel;

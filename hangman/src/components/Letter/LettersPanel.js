import React from 'react';

import './LettersPanel.css';
import Letter from "./LetterButton";

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function insertLetter(usedLetters, letter, guessLetter) {
    var used = usedLetters.has(letter) ? 'used' : 'available';
    return (<Letter letter={letter} status={used} guessLetter={guessLetter}/>)
}

const LettersPanel = ({usedLetters, guessLetter}) => (
    <div className='letters-panel'>
        <div className='letters-bar'>
        {
            LETTERS.slice(0, LETTERS.length/2)
                .map(letter => insertLetter(usedLetters, letter, guessLetter))
        }
        </div>
        <div className='letters-bar'>
        {
            LETTERS.slice(LETTERS.length/2, LETTERS.length)
                .map(letter => insertLetter(usedLetters, letter, guessLetter))
        }
        </div>
    </div>
);

export default LettersPanel;

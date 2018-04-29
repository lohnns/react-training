import React, {Component} from 'react';

import LettersPanel from "./Letter/LetterPanel";

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = App.initGame();
    }

    static initGame() {
        const answer = pickRandomWord().toUpperCase();
        return {
            answer: answer,
            usedLetters: new Set()
        };
    }

    /* actions */

    guessLetter = (letter) => {
        const {usedLetters} = this.state;
        usedLetters.add(letter);
        this.setState({
            usedLetters: new Set(usedLetters)
        });
    };

    startNewGame = () => {
        this.setState(App.initGame());
    };

    /* rendering */

    computeDisplay() {
        const {answer, usedLetters} = this.state;
        return answer.replace(/\w/g,
            (letter) => (usedLetters.has(letter) ? letter : '_')
        )
    }

    render() {
        const {usedLetters} = this.state;
        const phrase = this.computeDisplay();
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Hangman game</h1>
                </header>
                <p className="App-intro">
                    <div id='answer' className='hg-sentence'>{phrase}</div>
                    {
                        phrase.indexOf('_') > -1 ?
                            <LettersPanel guessLetter={this.guessLetter}/>
                            :
                            <div>
                                <div>You win in {usedLetters.size} guesses!</div>
                                <input type="button" value="Play again?" onClick={this.startNewGame}/>
                            </div>
                    }
                </p>
            </div>
        );
    }
}

/* util stuff to get words */

let words = [
    'karaoke',
    'patinoire',
    'peruvienne',
    'charcuterie',
    'epreuve',
    'lunaire',
    'ecrevisse',
    'donjon'
];

function pickRandomWord() {
    if (words.length === 0) {
        return 'derniermot';
    }
    let i = Math.floor(Math.random() * words.length);
    return words.splice(i, 1)[0];
}

export default App;
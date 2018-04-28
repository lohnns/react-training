import React, {Component} from 'react';
import './App.css';
import LettersPanel from "./Letter/LettersPanel";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = this.initGame();
    }

    initGame = () => {
        const answer = 'Abc'.toUpperCase();
        return {
            answer: answer,
            usedLetters: new Set(),
            lettersToFound: new Set([...answer])
        };
    }

    guessLetter = letter => {
        const {usedLetters, lettersToFound} = this.state;
        usedLetters.add(letter);
        lettersToFound.delete(letter);
        this.setState({
            usedLetters: new Set(usedLetters),
            lettersToFound: new Set(lettersToFound)
        });
    }

    startNewGame = () => {
        this.setState(this.initGame());
    }

    render() {
        const {answer, lettersToFound, usedLetters} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Hangman game</h1>
                </header>
                <p className="App-intro">
                    <div id='answer' className='hg-sentence'>{
                        [...answer].map(char => usedLetters.has(char) ? char : '_')
                    }</div>
                    {
                        lettersToFound.size !== 0 ?
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

export default App;

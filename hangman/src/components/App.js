import React, {Component} from 'react';
import './App.css';
import LettersPanel from "./Letter/LettersPanel";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: 'Integration'.toUpperCase(),
            usedLetters: new Set()
        }
    }

    guessLetter = letter => {
        const { usedLetters } = this.state;
        usedLetters.add(letter);
        this.setState({
            usedLetters: new Set(usedLetters)
        });
    }

    render() {
        const { answer, usedLetters } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Hangman game</h1>
                </header>
                <p className="App-intro">
                    <div id='answer' className='hg-sentence'>{
                        answer.split('').map(char => (usedLetters.has(char) ? char : '_') + ' ')
                    }</div>
                    <LettersPanel guessLetter={this.guessLetter}/>
                </p>
            </div>
        );
    }
}

export default App;

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
        const { usedLetters, answer } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Hangman game</h1>
                </header>
                <p className="App-intro">
                    <LettersPanel usedLetters={usedLetters} guessLetter={this.guessLetter}/>
                </p>
            </div>
        );
    }
}

export default App;

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
        const { usedLetters, gameId } = this.state;
        usedLetters.add(letter);
        this.setState({
            usedLetters: new Set(usedLetters)
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Hangman game</h1>
                </header>
                <p className="App-intro">
                    <LettersPanel guessLetter={this.guessLetter}/>
                </p>
            </div>
        );
    }
}

export default App;

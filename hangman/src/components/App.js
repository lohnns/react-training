import React, {Component} from 'react';
import './App.css';
import LettersPanel from "./Letter/LettersPanel";

const usedLetters = 'AEGQT'.split('');

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Hangman game</h1>
                </header>
                <p className="App-intro">
                    <LettersPanel usedLetters={usedLetters}/>
                </p>
            </div>
        );
    }
}

export default App;

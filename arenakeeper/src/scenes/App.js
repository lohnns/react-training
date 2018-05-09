import React, {Component} from 'react';

import './App.css';
import GameInfo from "../components/game/GameInfo";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Arena Keeper</h1>
                </header>
                <p className="App-intro">
                    <GameInfo/>
                </p>
            </div>
        );
    }
}

export default App;

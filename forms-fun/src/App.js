import React, {Component} from 'react';

import './App.css';
import PhoneInput from "./components/PhoneInput";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            name: ''
        }
    }

    name = '';

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Work with forms</h1>
                </header>
                <p className="App-intro">
                    <PhoneInput />
                </p>
            </div>
        );
    }
}

export default App;

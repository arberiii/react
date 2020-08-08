import React, { Component } from 'react';
import './App.css';

import Output from "./User/Output";
import Input from "./User/Input";

class App extends Component {
    state = {
        username: 'arberiii'
    };

    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
        <div>
            <h1>Assigment</h1>
            <Input change={this.changeUsername} username={this.state.username} />
            <Output username={this.state.username}/>
        </div>
        )
    }
}

export default App;


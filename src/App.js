import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    paragraph: ""
  }



  changeParagraphHandler = (event) => {
    this.setState({
      paragraph: event.target.value
    })
  }

  render () {

    let chars = null;

    if ( this.state.paragraph.length !== 0 ) {
      chars = (
        <div>
          {this.state.paragraph.split("").map(char => {
            return <Char char={char} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>{this.state.paragraph}</p>
        <Validation paragraph={this.state.paragraph}/>
        <div>
        <input type="text" onChange={this.changeParagraphHandler}/>
        </div>
        {chars}
      </div>
    );
  }
}

export default App;
/*global chrome*/
import React, { Component } from 'react';

class App extends Component {
  
  chromeFunc(){
    chrome.storage.local.get(null, function(v) {console.log(v)});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          id = "clickme"
          onClick={() => this.chromeFunc()}
        >
        button
        </button>
      </div>
    );
  }
}

export default App;

/*global chrome*/
import React, { Component } from 'react';
import Dexie from 'dexie';

class App extends Component {
  constructor(props){
    super(props);
    this.db = new Dexie("lbr");
    this.db.version(1).stores({ words: "++timestamp,word,sentence,pageurl" });
  }
  chromeFunc(){
    this.db.words.where('word').equals('moguls').each(word => console.log(word))
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

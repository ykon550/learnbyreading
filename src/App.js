/*global chrome*/
import React, { Component } from 'react';
import Dexie from 'dexie';
import WordList from './WordList';
import Navigation from './Navigation';

const navStyle = {
  color: '#e23131',
  fontFamily: 'serif',
  fontWeight: 'lighter',
  fontSize: '1.5em'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.db = new Dexie("lbr");
    this.db.version(1).stores({ words: "++timestamp,word,sentence,pageurl" });
    let _arr = [];
    this.db.table('words').each(word => _arr.push(word));
    this.state = {
      words: []
    }
  }

  componentDidMount() {
    this.db.table('words')
      .toArray()
      .then((words) => {
        this.setState({ words });
      });
  }

  func1(term) {
    console.log(term);
  }

  render() {
    return (
      <div >
        <Navigation />
        <div className="container-fluid">
          <WordList
            words={this.state.words}
          />
        </div>
      </div>
    );
  }
}

export default App;

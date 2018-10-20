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
    this.db.version(1).stores({
      words: `++timestamp, word, sentence, pageurl`,
      config: `++name, state`
    });
    let _arr = [];
    this.db.table('words').each(word => _arr.push(word));
    this.state = {
      words: [],
      page: 'words'
    }
  }

  componentDidMount() {
    this.db.table('words')
      .toArray()
      .then((words) => {
        this.setState({ words });
      });
  }

  setPage(page) {
    this.setState({ page: page });
  }

  func1(term) {
    console.log(term);
  }

  render() {
    switch (this.state.page) {
      case 'words':
        return (
          <div >
            <Navigation
              setPage={(page) => this.setPage(page)}
            />
            <div className="container-fluid">
              <WordList
                words={this.state.words}
              />
            </div>
          </div>
        );
      case 'settings':
        return (
          <div >
            <Navigation
              setPage={(page) => this.setPage(page)}
            />
            <div className="container-fluid">
              here is settings.
            </div>
          </div>
        );
    }
  }
}

export default App;

/*global chrome*/
import React, { Component } from 'react';
import Dexie from 'dexie';

class WordList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const wordsArr = this.props.words;
    const list = wordsArr.map((elem) => {
      return (
        <tr>
          <td>{elem.word}</td>
          <td>{elem.sentence}</td>
          <td>{elem.timestamp}</td>
          <td>{elem.pageurl}</td>
        </tr>
      )
    })
    return (
      <table>
        <tr>
          <th>Word</th>
          <th>Sentence</th>
          <th>Timestamp</th>
          <th>Source URL</th>
        </tr>
        {list}
      </table>
    )
  }
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Learn By Reading</h1>
        </header>
        <p className="App-intro">
          This extension let you take memos for english words, and highlight it on every web page.
        </p>

        <WordList
          words={this.state.words}
        />
      </div>
    );
  }
}

export default App;

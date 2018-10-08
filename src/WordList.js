import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

/**
 * 
 * @param {string} date
 */
const shortenDate = (date) => {
    let dt = new Date(date);
    const year = dt.getFullYear().toString();
    const month = ("0" + (dt.getMonth() + 1)).slice(-2).toString();
    const day = ("0" + dt.getDate()).slice(-2).toString();
    return year + month + day;
}

const sentenceFormalize = (_word, _text) => {
    const splits = _text.split(_word);
    const formalizedText = splits.map((elem, idx) => {
        if (idx === splits.length - 1) {
            return (
                <span>
                    {elem}
                </span>
            )
        } else {
            return (
                <span>
                    <span>
                        {elem}
                    </span>
                    <span style={{color:"red"}}>
                        {_word}
                    </span>
                </span>
            )
        }

    })
    return (
        <span>
            {formalizedText}
        </span>
    )
};

const urlFormalize = (string) => {
    const splits = string.split('/');
    const shortenText = splits.slice(2, 3).join('/') + '/...';
    return (
        <a href={string}> {shortenText} </a>
    )
}

class WordList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const wordsArr = this.props.words;
        const list = wordsArr.map((elem) => {
            let displaySentence = sentenceFormalize(elem.word, elem.sentence);
            let displayUrl = urlFormalize(elem.pageurl);
            let displayTS = shortenDate(elem.timestamp);
            return (
                <TableRow>
                    <TableCell>{elem.word}</TableCell>
                    <TableCell>{displaySentence}</TableCell>
                    <TableCell>{displayTS}</TableCell>
                    <TableCell>{displayUrl}</TableCell>
                </TableRow>
            )
        })
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <th>Word</th>
                            <th>Sentence</th>
                            <th>Noted at</th>
                            <th>Source</th>
                        </TableRow>
                    </TableHead>
                    {list}
                </Table>
            </Paper>
        )
    }
}

export default WordList;
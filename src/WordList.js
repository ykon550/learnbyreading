import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditDialog from './EditDialog';
import {LEVEL} from './constant';

/**
 * 
 * @param {string} date
 */
const formalizeDate = (date) => {
    let dt = new Date(date);
    const year = dt.getFullYear().toString();
    const month = ("0" + (dt.getMonth() + 1)).slice(-2).toString();
    const day = ("0" + dt.getDate()).slice(-2).toString();
    return year + month + day;
}

const formalizeSentence = (word, text) => {
    const splits = text.split(word);
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
                        {word}
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

const formalizeUrl = (string) => {
    const splits = string.split('/');
    const shortenText = splits.slice(2, 3).join('/') + '/...';
    return (
        <a href={string}> {shortenText} </a>
    )
}

class WordList extends Component {
    render() {
        const wordsArr = this.props.words;
        const list = wordsArr.map((elem, idx) => {
            let displaySentence = formalizeSentence(elem.word, elem.sentence);
            let displayUrl = formalizeUrl(elem.pageurl);
            let displayTS = formalizeDate(elem.timestamp);
            if(elem.storedlevel === LEVEL.ARCHIVED) return;
            return (
                <TableRow key={elem.id}>
                    <TableCell>{elem.word}</TableCell>
                    <TableCell>{displaySentence}</TableCell>
                    <TableCell>{displayTS}</TableCell>
                    <TableCell>{displayUrl}</TableCell>
                    <TableCell>
                        <EditDialog
                            item={elem}
                            handleUpdate={(item) => this.props.handleUpdate(item)}
                        >
                        </EditDialog>
                    </TableCell>
                </TableRow>
            )
        })
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Word</TableCell>
                            <TableCell>Sentence</TableCell>
                            <TableCell>Noted at</TableCell>
                            <TableCell>Source</TableCell>
                            <TableCell>Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default WordList;
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import editIcon from './images/edit_icon.png';
import { LEVEL } from './constant';


export default class EditDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            item: this.props.item
        }
    }

    handleChange = (name) => (event) => {
        const value = event.target.value;
        this.setState((prevState) => {
            let item = Object.assign({}, prevState.item)
            item[name] = value;
            return { item: item }
        })
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }

    onCancel = () => {
        this.setState({
            open: false,
            item: this.props.item
        });
    }

    onSave = () => {
        this.props.handleUpdate(this.state.item);
        this.setState({ open: false });
    }

    updateLevel = (level) => {
        this.setState((prevState) => {
            prevState.item.storedlevel = level;
            return { item: prevState.item, open: false }
        })
        this.props.handleUpdate(this.state.item);        
    }

    onArchive = () => {
        this.updateLevel(LEVEL.ARCHIVED);
    }
    onRestore = () => {
        this.updateLevel(LEVEL.TOP);
    }

    archiveOrRestore = (item) => {
        if (item.storedlevel === LEVEL.TOP) {
            return (
                <div>
                    <DialogTitle >Archive Record</DialogTitle>
                    <DialogActions>
                        <Button onClick={this.onArchive} color="secondary">
                            Archive
                        </Button>
                    </DialogActions>
                </div>
            )
        } else {
            return (
                <div>
                    <DialogTitle >Restore Record</DialogTitle>
                    <DialogActions>
                        <Button onClick={this.onRestore} color="primary">
                            Restore
                        </Button>
                    </DialogActions>
                </div>
            )
        }
    }

    render() {
        const Dialog2 = this.archiveOrRestore(this.state.item);
        return (
            <div>
                <Button onClick={this.handleClickOpen} color="default" >
                    <img src={editIcon} alt="Edit" />
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.onCancel}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Edit Record</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="word"
                            label="Word"
                            type="text"
                            fullWidth
                            defaultValue={this.state.item.word}
                            onChange={this.handleChange("word")}
                        />
                        <TextField
                            margin="dense"
                            id="sentence"
                            label="Sentence"
                            type="text"
                            fullWidth
                            multiline
                            defaultValue={this.state.item.sentence}
                            onChange={this.handleChange("sentence")}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.onCancel} color="default">
                            Cancel
                        </Button>
                        <Button onClick={this.onSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                    {Dialog2}
                </Dialog>
            </div>
        );
    }
}
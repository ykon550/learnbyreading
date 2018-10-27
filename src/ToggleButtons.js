import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { LEVEL } from './constant';

const styles = theme => ({
    toggleContainer: {
        height: 56,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: `${theme.spacing.unit}px 0`,
    },
});

class ToggleButtons extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={16}>
                <div className={classes.toggleContainer}>
                    <ToggleButtonGroup value={this.props.level} exclusive onChange={(e, level) => this.props.handleLevel(e, level)}>
                        <ToggleButton value={LEVEL.TOP}>
                            Words
                        </ToggleButton>
                        <ToggleButton value={LEVEL.ARCHIVED}>
                            Archived
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </Grid>
        );
    }
}

ToggleButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToggleButtons);
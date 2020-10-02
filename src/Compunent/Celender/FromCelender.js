import { TextField } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));



const FromCelender = () => {
    const classes = useStyles();
    return (
        <div>
            <form className={classes.container} noValidate>
                <TextField
                    id="date"
                    label="From"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        </div>
    );
};

export default FromCelender;
import { Button,TextField } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './CreateAccount.css'
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const CreateAcount = () => {
    const classes = useStyles();
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <h3>Create Account</h3>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField className='signup-inputs' id="standard-basic" label="First Name" />
                        <TextField className='signup-inputs' id="standard-basic" label="Last Name" />
                        <TextField className='signup-inputs' id="standard-basic" label="User Name or Email" />
                        <TextField className='signup-inputs' id="standard-basic" label="Password" />
                        <TextField className='signup-inputs' id="standard-basic" label="Confirm Password" />
                        <Button variant="contained" color="primary">
                            Create Account
                        </Button>
                        <p>Already have an account?</p> <Link to="/login"> <p>Login</p> </Link>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p>Or</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button>Continue with Facebook</button>
                    <button>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default CreateAcount;
import React, { useContext, useState } from 'react';
import { Button, Checkbox, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLogInFrameWork, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithInEmailAndPassword } from './LoginManeger';




const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '700px',
        },
    },
    signupInputs: {
        width: "700px",
    }
}));

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })

    initializeLogInFrameWork()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } }

    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }

    }
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }

    const classes = useStyles();
    return (
        <div className='container'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Login</h3>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField className={classes.signupInputs} id="standard-basic" label="Username or Email" />
                            <TextField className={classes.signupInputs} id="standard-basic" label="Password" />
                            <div className="row">
                                <div className="col-md-6"><Checkbox

                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                    <p>Remember me</p>

                                </div>

                                <div className="col-md-6">
                                    <Link><p>Forgot Password</p></Link>
                                </div>
                            </div>
                            <Button variant="contained" color="primary">
                                Login
                            </Button>

                            <p>Do not have account?</p> <Link to="/createacount"> <p>Create account</p> </Link>
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
                        <button onClick={googleSignIn}>Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
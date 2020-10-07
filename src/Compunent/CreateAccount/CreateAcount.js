import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './CreateAccount.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword } from './CreateAccountMeneger';
import { newUserContext, UserContext } from '../../App';
import { initializeLogInFrameWork } from '../Login/LoginManeger';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const CreateAcount = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    initializeLogInFrameWork()
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/login" } }

    const [newUser, setNewUser] = useState(false);

    const [createUser, setCreateUser] = useState({
        isSignedIn: false,
        name: '',
        fname: '',
        lname: '',
        displayName: "",
        email: '',
        password: '',
        photo: '',
        error:'',

    })



    const handleSubmit = (e) => {
        console.log(createUser.displayName, createUser.email, createUser.password)

        if (createUser.displayName && createUser.email && createUser.password) {

            createUserWithEmailAndPassword(createUser.displayName, createUser.email, createUser.password)
        }
        e.preventDefault();
    }

    const handleResponse = (res, redirect) => {
        setCreateUser(res)
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }

    }


    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {

            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...createUser };
            newUserInfo[e.target.name] = e.target.value;
            setCreateUser(newUserInfo);
        }
    }

    const classes = useStyles();
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <h3>Create Account</h3>
                    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                        <TextField onBlur={handleBlur} name="fname" className='signup-inputs' id="standard-basic" label="First Name" required />
                        <TextField onBlur={handleBlur} name="lname" className='signup-inputs' id="standard-basic" label="Last Name" required />
                        <TextField onBlur={handleBlur} name="displayName" className='signup-inputs' id="standard-basic" label="Display Name" required />
                        <TextField onBlur={handleBlur} name="email" className='signup-inputs' id="standard-basic" label="Email" required />
                        <TextField onBlur={handleBlur} name="password" className='signup-inputs' id="standard-basic" label="Password" required />
                        <TextField onBlur={handleBlur} name="confirmPassword" className='signup-inputs' id="standard-basic" label="Confirm Password" required />
                        <input type="submit" value="Create Account" />
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
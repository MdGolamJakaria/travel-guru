import { Button, Checkbox, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {

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
    const classes = useStyles();


    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Login</h3>

                        <form onSubmit={props.handleSubmit} className={classes.root} noValidate autoComplete="off">
                            <TextField name="email" onBlur={props.handleBlur} className={classes.signupInputs} id="standard-basic" label="Username or Email" />
                            <TextField name="password" onBlur={props.handleBlur} className={classes.signupInputs} id="standard-basic" label="Password" />
                            <div className="row">
                                <div className="col-md-9">
                                    <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /><p>Remember me</p>
                                </div>
                                <div className="col-md-3">
                                    <Link to="/forgotPassword"><p>Forgot Password</p></Link>
                                </div>
                            </div>
                            <input type="submit" value="Login" />
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
                        <button  >Continue with Facebook</button>
                        <button onClick={props.googleSignIn}>Continue with Google</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoginForm;
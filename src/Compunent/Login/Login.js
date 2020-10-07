import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLogInFrameWork, handleGoogleSignIn, signInWithInEmailAndPassword } from './LoginManeger';
import LoginForm from './LoginForm';
import AccountDetails from './AccountDetails';





const Login = () => {
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
    let { from } = location.state || { from: { pathname: "/account" } }


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
                console.log(res)
            })
    }

    const handleBlur = (event) => {
        let isFormValid;
        if (event.target.name === "email") {
            const isEmailValid = /\S+@\S+\.\S+/.test(event.target.value)
            isFormValid = isEmailValid
        } if (event.target.name === "password") {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value)
            isFormValid = isPasswordValid && passwordHasNumber
        }
        if (isFormValid) {
            const newUserInfo = { ...user }
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo)
        }
    }


    const handleSignOut = () => {
        console.log("Signout")
    }

    const handleSubmit = (e) => {
        // if (newUser && user.email && user.password) {
        //     createUserWithEmailAndPassword(user.name, user.email, user.password)
        //         .then(res => {
        //             handleResponse(res, true)
        //         })
        // }

        if (user.email && user.password) {
            signInWithInEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true)
                })
        }

        e.preventDefault();

    }
    console.log(user)


    return (
        <div>
            {
                user.isSignedIn ? <AccountDetails handleSignOut={handleSignOut} user={user}></AccountDetails> : <LoginForm handleSubmit={handleSubmit} googleSignIn={googleSignIn} handleBlur={handleBlur}></LoginForm>
            }
        </div>

    );
};

export default Login;
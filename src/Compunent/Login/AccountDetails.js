import React from 'react';

const AccountDetails = (props) => {
    console.log(props)
    return (
        <div className='container'>
            <img src="" alt="User Images" />
            <h1>Name: </h1>
            <h4>Email: </h4>
            <button onClick={props.handleSignOut} >Sign out</button>

        </div>
    );
};

export default AccountDetails;
import React, { useState, useEffect } from 'react';
import { createNewUser, getLoginUser,  } from '../api';


const Login = ({setIsLoggedIn, isLoggedIn, setToken}) => {

    const [newUser, setNewUser] = useState(false)
    const [newUserId, setNewUserId] = useState('')
    const [newUserPass, setNewUserPass] = useState('')

    return (
        isLoggedIn === false
        ? (
            <div className='not-logged-in-splash'>

                {/* check if we need to create a new user ---> */}
                <p id='new-sign-up-option'>New User? 
                    <span>
                        <input type="checkbox" 
                            id='create-new-user'
                            onChange={(event) => {
                                setNewUser(true)
                                console.log(newUser)
                            }} />
                    </span>
                </p>
                
                <form id='login-form'>
                    <label htmlFor='username-input'>Username:</label>
                    <span id='username-input'>
                    <input id='username'
                       onChange={(event) => {
                            (console.log('typing username', event.target.value))
                            setNewUserId(event.target.value)
                        }}
                    />
                    </span>
                    <label htmlFor='password-input'>Password:</label>
                    <span id='password-input'>
                    <input type="password" 
                        id='password'
                        minLength="8"
                        onChange={(event) => {
                            (console.log('typing password', event.target.value))
                            setNewUserPass(event.target.value)
                        }}
                    />
                    </span>

                {/* if we aren't creating a new user, we call the API with a dif. function --> */}

                    <label htmlFor='submit-login'>
                        <button 
                        onClick={(event) => {
                            event.preventDefault();
                            // console.log(newUserId, newUserPass)
                            (newUser === true 
                            ? 
                                createNewUser(newUserId, newUserPass)
                            : 
                                getLoginUser(newUserId, newUserPass)
                                // console.log('not nice')
                            ) 
                        }}
                        >Submit
                        </button>
                    </label>
                </form>
            </div>
        ) : null
    )
}

export default Login
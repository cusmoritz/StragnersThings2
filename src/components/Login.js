import React, { useState, useEffect } from 'react';
import { createNewUser, getLoginUser,  } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

const Login = ({setToken}) => {

    const [newUser, setNewUser] = useState(false)
    const [newUserId, setNewUserId] = useState('')
    const [newUserPass, setNewUserPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const {switcher} = useParams();
    const history = useNavigate()

    console.log(switcher, "switcher")

    const pageTitle = switcher === "login" ? "Log in" : "Sign Up";

    const handleOnSubmit = async(event) => {
        event.preventDefault();

        try {
            if (newUser) {
                let newUserToken = await createNewUser(newUserId, newUserPass)
                setToken(newUserToken)  
                history("/posts")       
            } else {
                let response = await getLoginUser(newUserId, newUserPass)
                console.group('this is the response', response)
                setToken(response)
                history("/posts")
            }

        } catch (error) {
            alert('there was an error logging in', error)
            console.error(error)
        }
    }

    return (
        <>
        <h4>{pageTitle}</h4>
            <div className='not-logged-in-splash' onSubmit={handleOnSubmit}>

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
                    <label htmlFor='username-label'>Username</label>
                    <span id='username-input'>
                    <input id='username'
                        type="text"
                        required
                        value={newUserId}
                        onChange={(event) => {
                            // (console.log('typing username', event.target.value))
                            setNewUserId(event.target.value)
                        }}
                    />
                    </span>
                    <label htmlFor='password-label'>Password</label>
                    <span id='password-input'>
                    <input type="password" 
                        value={newUserPass}
                        required
                        id='password'
                        minLength="8"
                        onChange={(event) => {
                            // (console.log('typing user', event.target.value))
                            setNewUserPass(event.target.value)
                        }}
                    />
                    </span>

                    {/* if (newUser === true) {
                        <>
                            <label htmlFor='confirm-input'>Confirm password:</label>
                            <span id='confirm-input'>
                            <input type="password" 
                            value={confirmPass}
                            id='confirm'
                            minLength="8"
                            onChange={(event) => {
                                (console.log('typing password', event.target.value))
                                setConfirmPass(event.target.value)
                            }}
                            />
                            </span>
                        </>
                    } */}
                    

                {/* if we aren't creating a new user, we call the API with a dif. function --> */}

                    <label htmlFor='submit-login'>
                        <button 
                            type="submit">
                            {pageTitle}
                        </button>
                        
                    </label>
                </form>
            </div>
    </>
    )
}

export default Login
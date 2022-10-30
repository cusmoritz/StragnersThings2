import React, { useState, useEffect } from 'react';
import { createNewUser, getLoginUser,  } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

const Login = ({setToken, setSearch}) => {

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

        if (newUser === true) {
            if (newUserPass == confirmPass) {
                try {
                    let newUserToken = await createNewUser(newUserId, newUserPass)
                    setToken(newUserToken)  
                    history("/posts")
                } catch (error) {
                    alert('Sorry! Something went wrong creating a new user. Error:', error)
                }
            } else {
                alert('Hold up! To sign up, your password must be confirmed. Please try again.')
                setNewUserPass("")
                setConfirmPass("")
            }
        } else {
            try{
                let response = await getLoginUser(newUserId, newUserPass)
                console.log('this is the response', response)
                setToken(response)
                history("/posts")
            } catch (error) {
                console.log('there was an error trying to log in: ', error)
            }
        }
    }

    let ConfirmPassword = () => {
        return (
            <>
            <label htmlFor='confirm-password'>Confirm password:</label>
                <span id='confirm-password'>
                    <input type="password" 
                        value={confirmPass}
                        // id='confirm'
                        minLength="8"
                        required
                        onChange={(event) => {
                            console.log(event.target.value)
                            setConfirmPass(event.target.value) 
                            // console.log('typing password', confirmPass)
                        }} />
                </span>
            </>
        )
    }

    return (
        <>
        <h4>{pageTitle}</h4>
            <div className='not-logged-in-container' onSubmit={handleOnSubmit}>

                {/* check if we need to create a new user ---> */}
                <p id='new-user-option'>New User? 
                    <span>
                        <input type="checkbox" 
                            id='create-new-user'
                            onChange={(event) => {
                                console.log('newUser was: ', newUser)
                                setNewUser(!newUser)
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

                    {newUser === true ? (
                        <>
                        <label htmlFor='confirm-password'>Confirm password:
                        <span id='confirm-password'>
                            <input type="password" 
                                value={confirmPass}
                                // id='confirm'
                                minLength="8"
                                required
                                onChange={(event) => {
                                    console.log(event.target.value)
                                    setConfirmPass(event.target.value) 
                                    // console.log('typing password', confirmPass)
                                }} />
                        </span>
                        </label>
                        </>
                    )  
                    : null }
                    

                {/* if we aren't creating a new user, we call the API with a dif. function --> */}

                    <label htmlFor='submit-login'>
                        <button type="submit">
                            <a>{pageTitle}</a>
                        </button>
                        
                    </label>
                </form>
            </div>
    </>
    )
}

export default Login
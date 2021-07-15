import React, { useState } from 'react'
import logo from '../img/logo.jpg'
import '../Login/Login.css'
import {auth} from '../firebase'
import{Link, useHistory} from 'react-router-dom'


// part 9

function Login(){

    const history = useHistory();
    const [useremail,setUserEmail] = useState('')
    const [userpassword,setUserPassword]= useState('')
    
    const loginuser = event => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail,userpassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e =>alert(e.message))
    
    }

    const signupuser = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail,userpassword)
        .then(auth =>{
            history.push('/')
        })
        .catch(e =>alert(e.message))

    }

    return(
        <div className="login">
            <img className="login__logo" src= {logo} alt="logo"/>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password"/>
                    <button onClick={loginuser} type="submit" className="login__signInButton">Sign In</button>
                    <hr/>
                    <p>New customer? Start here.</p>
                    <button onClick={signupuser} type="submit" className="login__registerButton">Create New Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
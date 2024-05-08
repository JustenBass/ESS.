import React, { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/user'
import { useNavigate } from 'react-router-dom'


export default function Signup() {
    const { signupUser } = useContext( UserContext )
    const [ username, setUserName ] = useState( '' )
    const [ password, setPassword ] = useState( '' )
    const [ passwordConfirmation, setPasswordConfirmation ] = useState( '' )
    const [ signUpErrors, setSignupErrors ] = useState( '' )
    const navigate = useNavigate()


    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch('/signup',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then((r) => r.json())
        .then((user) => {
            if(!user.errors){
                signupUser( user )
                navigate( '/' )
            } else {
                const userError = user.errors.map((error) => <li>{ error }</li>)
                setSignupErrors( userError )
            }
        })
    }

    
  return (
    <div>
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                placeholder='Username...'
                name='username'
                value={ username }
                onChange={ (e) => setUserName(e.target.value) }
            />

            <input
                type='password'
                placeholder='Password...'
                name='password'
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
            />

            <input
                type='password'
                placeholder='Confirm passoword...'
                name='password_confirmation'
                value={ passwordConfirmation }
                onChange={ (e) => setPasswordConfirmation(e.target.value) }
            />

            <input type="submit"/>
        </form>
        <h3>{ signUpErrors }</h3>
    </div>
  )
}

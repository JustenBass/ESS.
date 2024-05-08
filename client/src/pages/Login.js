import React, {useState} from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/user'
import { useNavigate } from 'react-router-dom'

export default function () {
    const { loginUser } = useContext( UserContext )
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [loginError, setLoginError ] = useState('')
    const navigate = useNavigate()


    function handleLoginSubmit(e){
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((r) => r.json())
        .then((user) => {
            if(!user.error){
                loginUser ( user )
                navigate( '/' )
            } else {
                const userError = user.error.map((error) => <>{ error }</>)
                setLoginError( userError )
                setUsername( '' )
                setPassword( '' )
            }
        })
    }

    
  return (
    <div>
        <form onSubmit={ handleLoginSubmit }>
            <input
                placeholder='Username...'
                id='username'
                value={ username }
                onChange={ (e) => setUsername(e.target.value) }
            />

            <input
                placeholder='Password...'
                id='password'
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
            />

            <input type="submit" />
        </form>

        <h3>{ loginError }</h3>
    </div>
  )
}

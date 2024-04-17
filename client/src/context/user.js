import React, {useState, useEffect, useContext} from "react";
import { useNavigate } from 'react-router-dom'

const UserContext = React.createContext()

function UserProvider({ children }) {
    const [ user, setUser ] = useState( null )
    const [ authenticated, setAuthenticated ] = useState( false )
    const navigate = useNavigate()

    function handleSubmitLogin(e, username, password, setError, setUsername, setPassword){
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {'Content_Type' : 'applivation/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((r) => r.json())
        .then((user) => {
            if(!user.error){
                setUser( user )
                setAuthenticated( true )
                navigate('/')
            } else {
                const userError = user.error.map((error) => <>{ error }</>)
                setError( userError )
                setUsername('')
                setPassword('')
            }
        })
    }
    return(
        <UserContext.Provider
        value={{ user, setUser, authenticated, handleSubmitLogin }}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider}
import React, { useState, useEffect } from "react";


const UserContext = React.createContext()

function UserProvider({ children }) {
    const [ user, setUser ] = useState( null )
    const [ authenticated, setAuthenticated ] = useState( false )
    console.log('user', user)

    useEffect(() => {
        fetch('/user_profile')
        .then((r) => r.json())
        .then((userData) => {
            if( userData.error ){
                setAuthenticated( false );
                // const errorList = userData.error.map((error) => <>{ error }</>)
                // console.log('error', errorList)
                // setUserError( errorList );
            } else {
                setUser( userData )
                setAuthenticated( true );
            }
        })
    }, []);

    const signupUser = (user) => {
        setUser( user )
        setAuthenticated( true )
    }

    const loginUser = ( user ) => {
        setUser( user )
        setAuthenticated( true )
        console.log('cart', user.cart)
    }

    const logoutUser = () => {
        setUser( null )
        setAuthenticated( false )
      };

    return(
        <UserContext.Provider
        value={{ user, setUser, authenticated, signupUser, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider}
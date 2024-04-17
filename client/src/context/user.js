import React, {useState } from "react";


const UserContext = React.createContext()

function UserProvider({ children }) {
    const [ user, setUser ] = useState( null )
    const [ authenticated, setAuthenticated ] = useState( false )

    const loginUser = ( user ) => {
        setUser( user )
        setAuthenticated( true )
    }

    const logoutUser = () => {
        setUser( null )
        setAuthenticated( false )
      };

    return(
        <UserContext.Provider
        value={{ user, setUser, authenticated, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider}
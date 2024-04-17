import React, {useState, useEffect, useContext} from "react";



const UserContext = React.createContext()

function UserProvider({ children }) {

    return(
        <UserContext.Provider
        value={{   }}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider}
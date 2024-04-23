import React, {useState, useEffect} from "react";



const GuestCartContext = React.createContext()

function GuestCartProvider({ children }) {
    const [ guestCart, setGuestCart ] = useState({})
    const [ carts, setCarts ] = useState([])


    useEffect(() =>{
        fetch('/guest_cart')
        .then((r) => r.json())
        .then((cart) => {
            setGuestCart( cart )
        })
    }, [] )

    useEffect(() =>{
        fetch('/carts')
        .then((r) => r.json())
        .then((cart) => {
            setCarts( cart )
        })
    }, [] )


    return(
        <GuestCartContext.Provider
        value={{ guestCart, setGuestCart, carts, setCarts }}>
            {children}
        </GuestCartContext.Provider>
    )
}


export { GuestCartContext, GuestCartProvider}
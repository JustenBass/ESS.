import React, {useState, useEffect} from "react";



const GuestCartContext = React.createContext()

function GuestCartProvider({ children }) {
    const [ guestCart, setGuestCart ] = useState({})
    console.log('guest cart products', guestCart.products)
    console.log('guest cart orders', guestCart.orders)


    useEffect(() =>{
        fetch('/guest_cart')
        .then((r) => r.json())
        .then((cart) => {
            setGuestCart( cart )
        })
    }, [] )


    return(
        <GuestCartContext.Provider
        value={{ guestCart }}>
            {children}
        </GuestCartContext.Provider>
    )
}


export { GuestCartContext, GuestCartProvider}
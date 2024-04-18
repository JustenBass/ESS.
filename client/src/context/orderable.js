import React, {useState, useEffect} from "react";



const OrderableContext = React.createContext()

function OrderableProvider({ children }) {

    function addtoOrder(newOrder){
        fetch('/orderables',{
            method: "POST",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then((r) => r.json())
        .then((newO) => {
            
        })
    }


    return(
        <OrderableContext.Provider
        value={{   }}>
            {children}
        </OrderableContext.Provider>
    )
}


export { OrderableContext, OrderableProvider}
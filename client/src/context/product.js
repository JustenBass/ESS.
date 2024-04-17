import React, {useState, useEffect} from "react";



const ProductContext = React.createContext()

function ProductProvider({ children }) {


    return(
        <ProductContext.Provider
        value={{   }}>
            {children}
        </ProductContext.Provider>
    )
}


export { ProductContext, ProductProvider}
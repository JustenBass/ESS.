import React, { useState, useEffect } from "react";


const UserContext = React.createContext()

function UserProvider({ children }) {
    const [ user, setUser ] = useState( {} )
    const [cart, setCart ] = useState({})
    const [ authenticated, setAuthenticated ] = useState( false )
    console.log('user', user)

    useEffect(() => {
        fetch('/user_profile')
        .then((r) => r.json())
        .then((user) => {
            setUser(user)
            setAuthenticated(true)
        })
    }, [])

    useEffect(() => {
        fetch('/my_cart')
        .then((r) => r.json())
        .then((userCart) => {
            setCart(userCart)
            setAuthenticated(true)
        })
    }, [])



    const signupUser = (user) => {
        setUser( user )
        setAuthenticated( true )
    }

    const loginUser = ( user ) => {
        setUser( user )
        setAuthenticated( true )
    }

    const logoutUser = () => {
        setUser( null )
        setAuthenticated( false )
      };




  function addToUserCart(newOrder, user, setUser){
    fetch('/carts', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(newOrder)
    })
    .then((r) => r.json())
    .then((order) => {


        let findExisitingOrder = user.cart.orders.find((ord) => ord.product_id === order.product_id)

        if (!findExisitingOrder){
            let updateUserCartOrder = {...user, ...user.cart, cart: {...user.cart, orders:[...user.cart.orders, order], products:[...user.cart.products, order.product]}}
            setUser(updateUserCartOrder)
        }
    })
}


function updateUserCart(updatedOrder, user, setUser){
    fetch(`/carts/${user.cart.id}`,{
        method: 'PATCH',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(updatedOrder)
    })
    .then((r) => r.json())
    .then((order) => {
        let updateUserCartOrder = user.cart.orders.map((ord) => {
            if(ord.id === order.id){
                console.log('wow')
            }
        })
    })
}


  const handleAddToCart = (product, quantity, user, setUser) => {
    const newOrder = {
        product_id: product.id,
        quantity: quantity
    }
    addToUserCart(newOrder, user, setUser)
  }

  const handleUpdateCart = (product, quantity, user, setUser) => {
    const updatedOrder = {
        product_id: product.id,
        quantity: quantity
    }
    updateUserCart(updatedOrder, user, setUser)
  }

    return(
        <UserContext.Provider
        value={{ user, setUser, authenticated, signupUser, loginUser, logoutUser, handleAddToCart, handleUpdateCart}}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider}
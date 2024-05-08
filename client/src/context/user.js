import React, { useState, useEffect } from "react";
import swal from 'sweetalert';


const UserContext = React.createContext()

function UserProvider({ children }) {
    const [ welcome, setWelcome ] = useState( true )
    const [ user, setUser ] = useState( null )
    const [ isAuthenticated, setIsAuthenticated ] = useState( false )
    const [userCart, setUserCart ] = useState(null)
    const [cartTotal, setCartTotal] = useState(null)


    const loginUser = ( user ) => {
        setUser( user )
        setIsAuthenticated( true )
        setUserCart ( user.cart )
        setCartTotal(user.cart.total)
        setWelcome( true )
    }


    const signupUser = (user) => {
        setUser( user )
        setIsAuthenticated( true )
        setUserCart ( user.cart )
        setCartTotal(user.cart.total)
        setWelcome( false )
    }


    useEffect(() => {
        fetch('/user_profile')
        .then((r) => r.json())
        .then((user) => {
            if(user.error){
                setIsAuthenticated( false )
            } else {
                setUser(user)
                setIsAuthenticated(true)
                setUserCart(user.cart)
            }
        })
    }, [])


    useEffect(() => {
        fetch('/user_cart')
        .then((r) => r.json())
        .then((userCart) => {
            setUserCart (userCart)
        })
    }, [])


    useEffect(() => {
        fetch('/cart_total')
        .then((r) => r.json())
        .then((total) => {
            setCartTotal(total)
        })
    },[])


    const logoutUser = () => {
        setUser( null )
        setIsAuthenticated( false )
        setUserCart(null)
        setCartTotal(null)
      };


      function updateUserCartTotal(cart){
        fetch('/update_cart_total',{
            method: 'PATCH',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(cart)
        })
        .then((r) => r.json())
        .then((updatedTotal) => {
            setCartTotal(updatedTotal)
          })
        }


    function updateUserCart(order){
    fetch('/update_cart',{
        method: 'PATCH',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(order)
    })
    .then((r) => r.json())
    .then((updatedUserCart) => {
        setUserCart(updatedUserCart)
        updateUserCartTotal(updatedUserCart)
        swal(`You've added ${order.product_name}. You're cart total is now $${updatedUserCart.total}`)
      })
    }


  function addToUserCart(newOrder){
    fetch('/carts', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(newOrder)
    })
    .then((r) => r.json())
    .then((order) => {

        let findExisitingCartOrder = userCart.orders.find((ord) => ord.product_id === order.product_id)

        if (!findExisitingCartOrder){
            let updateUserCart = {...userCart, orders:[...userCart.orders, order], products:[...userCart.products, order.product]}
            setUserCart(updateUserCart)
            updateUserCartTotal(updateUserCart)
            swal(`You've added ${order.product_name}. You're cart total is now $${order.cart_total}`)
        } else {
            const exisitingOrder = {
                id: findExisitingCartOrder.id,
                quantity: newOrder.quantity,
                product_name: order.product_name
            }
            updateUserCart(exisitingOrder)
        }
    })
}


  const handleAddToCartParams = (product, quantity) => {
    const newOrder = {
        product_id: product.id,
        quantity: quantity
    }
    addToUserCart(newOrder)
  }


    return(
        <UserContext.Provider
        value={{ isAuthenticated, welcome, user, setUser, userCart, cartTotal, signupUser, loginUser, logoutUser, handleAddToCartParams}}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider}
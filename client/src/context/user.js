import React, { useState, useEffect } from "react";
import swal from 'sweetalert';


const UserContext = React.createContext()

function UserProvider({ children }) {
    const [ user, setUser ] = useState( {} )
    const [cart, setCart ] = useState(null)
    const [cartTotal, setCartTotal] = useState(null)
    const [ isAuthenticated, setIsAuthenticated ] = useState( false )
    const [ welcome, setWelcome ] = useState( true )
    console.log('Cart Total', cartTotal)


    const loginUser = ( user ) => {
        setUser( user )
        setCart( user.cart )
        setIsAuthenticated( true )
        setWelcome( true )
    }

    const signupUser = (user) => {
        setUser( user )
        setCart( user.cart )
        setWelcome( false )
        setIsAuthenticated( true )
    }


    useEffect(() => {
        fetch('/user_profile')
        .then((r) => r.json())
        .then((userData) => {
            if(userData.error){
                setIsAuthenticated( false )
            } else {
                setUser(userData)
                setCart(userData.cart)
                setIsAuthenticated(true)
            }
        })
    }, [])


    useEffect(() => {
        fetch('/my_cart')
        .then((r) => r.json())
        .then((userCart) => {
            setCart(userCart)
            // setIsAuthenticated(true)
        })
    }, [])

    useEffect(() => {
        fetch('/cart_total')
        .then((r) => r.json())
        .then((total) => {
            setCartTotal(total)
        })
    }, [])




    const logoutUser = () => {
        setUser( null )
        setCart(null)
        setCartTotal(null)
        setIsAuthenticated( false )
      };



    function updateUserCart(order){
    fetch('/update_cart',{
        method: 'PATCH',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(order)
    })
    .then((r) => r.json())
    .then((updatedCart) => {
        setCart(updatedCart)
        swal('The quantity of your existing cart item has been updated.')
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


        let findExisitingOrder = cart.orders.find((ord) => ord.product_id === order.product_id)

        if (!findExisitingOrder){
            let updateUserCartOrder = {...cart, orders:[...cart.orders, order], products:[...cart.products, order.product]}
            setCart(updateUserCartOrder)
            setCartTotal(updateUserCartOrder.total)
            // swal('Item added to cart.')
            // setCartTotal(order.total)
        } else {
            const exisitingOrder = {
                id: findExisitingOrder.id,
                quantity: newOrder.quantity
            }
            updateUserCart(exisitingOrder)
        }
    })
}


  const handleAddToCart = (product, quantity) => {
    const newOrder = {
        product_id: product.id,
        quantity: quantity
    }
    addToUserCart(newOrder)
  }


    return(
        <UserContext.Provider
        value={{ isAuthenticated, user, setUser, signupUser, loginUser, logoutUser, handleAddToCart, cart, welcome, cartTotal}}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider}
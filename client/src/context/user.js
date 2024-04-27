import React, { useState, useEffect } from "react";


const UserContext = React.createContext()

function UserProvider({ children }) {
    const [ user, setUser ] = useState( {} )
    const [cart, setCart ] = useState({})
    const [ authenticated, setAuthenticated ] = useState( false )
    console.log('user', user)
    console.log('cart', cart)


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

    useEffect(() => {
        fetch('/my_cart')
        .then((r) => r.json())
        .then((cart) => {
            setCart( cart )
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
    fetch('/orders', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(newOrder)
    })
    .then((r) => r.json())
    .then((order) => {

        // let updateUserCartOrder = {...user, ...user.cart,
        //      cart: {...user.cart, orders:[...user.cart.orders, order],
        //      products:[...user.cart.products, order.product]}}
        //  setUser(updateUserCartOrder)

        let findExistingOrder = cart.orders.find((orderProduct) => orderProduct.product_id === order.product_id)

        if(findExistingOrder){
            let t = {...findExistingOrder, quantity: findExistingOrder.quantity + order.quantity }
            setCart({...cart, orders:[...cart.orders, t]})

        } else {
            setCart({...cart, orders:[...cart.orders, order], products:[...cart.products, order.product]})
        }

    })

  }

  const handleAddToCart = (product, user, setUser, quantity) => {
    const newOrder = {
        product_id: product.id,
        cart_id: user.cart.id,
        quantity: quantity
    }
    addToUserCart(newOrder, user, setUser)
  }

    return(
        <UserContext.Provider
        value={{ user, setUser, authenticated, signupUser, loginUser, logoutUser, handleAddToCart, cart }}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider}
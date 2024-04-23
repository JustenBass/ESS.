import React, {useState, useEffect} from "react";



const OrderContext = React.createContext()

function OrderProvider({ children }) {
    const [ orders, setOrders ] = useState( [] )
    const [ orderErrors, setOrderErrors ] = useState('')

    useEffect(() => {
        fetch('/orders')
        .then((r) => r.json())
        .then((orders) => {
            setOrders(orders)
        })
    }, [])


    const addToUserOrder = ( newOrder, user, setUser, carts, setCarts, setProducts ) => {
        fetch('/orders', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then((r) => r.json())
        .then((order) => {
            console.log('newOrder', order)
            if(!order.errors){

                // setUser({...user.cart, products:[...cart.products, order.product]})
                setUser({...user, cart:{orders:[...orders, order]}})

            } else {
                const orderErr = order.errors.map((error) => <li>{ error }</li>)
                setOrderErrors(orderErr)
            }
        })
    }

    const addToOrderObj = (product, user, setUser, quantity ) => {
        const newOrderObj = {
            product_id: product.id,
            cart_id: user.cart.id,
            quantity: quantity
        }
        addToUserOrder(newOrderObj, user, setUser)
    }

    return(
        <OrderContext.Provider
        value={{ orders, setOrderErrors, orderErrors, addToOrderObj }}>
            {children}
        </OrderContext.Provider>
    )
}


export { OrderContext, OrderProvider}
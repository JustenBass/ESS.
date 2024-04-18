import React from 'react'
import { useContext } from 'react'
import { OrderContext } from '../context/order'
import { GuestCartContext } from '../context/guest_cart'


export default function ProductCard({ product }) {
  const { addToOrderObj} = useContext( OrderContext )
  const{ guestCart } = useContext( GuestCartContext )

  return (
    <div>
        <h3> { product.name } </h3>
        <img src={ product.img } width='200' height='200' />
        <h2> ${ product.price } </h2>
        <button onClick={ () => addToOrderObj(product, guestCart) }>Add To Cart</button>
    </div>
  )
}

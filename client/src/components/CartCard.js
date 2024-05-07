import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/products'


export default function CartCard({ order }) {

    const { products } = useContext( ProductContext )



    let findOrderProduct = products.find((product) => product.id === order.product_id)

  return (
    <div>
        <h3>{ findOrderProduct?.name }</h3>
        <img src={ findOrderProduct?.img } width='250' height='250'/>
        <h2>Quantity: { order.quantity }</h2>
    </div>
  )
}

import React from 'react'

export default function CartCard({ order }) {
  return (
    <div>
        <h3>{ order.name }</h3>
        <img src={ order.img } width='250' height='250'/>
        {/* <h2>Quantity: { order.quantity }</h2> */}
    </div>
  )
}

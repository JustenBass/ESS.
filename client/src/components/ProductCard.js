import React from 'react'




export default function ProductCard({ product }) {

  return (
    <div>
        <h3> { product.name } </h3>
        <img src={ product.img } width='200' height='200' />
        <h2> ${ product.price } </h2>
    </div>
  )
}

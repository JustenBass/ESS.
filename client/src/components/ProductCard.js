import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/user'




export default function ProductCard({ product }) {
const { user, setUser } = useContext( UserContext )

  return (
    <div>
        <h3> { product.name } </h3>
        <img src={ product.img } width='200' height='200' />
        <h2> ${ product.price } </h2>
        <button>Add To Cart</button>
    </div>
  )
}

import React, { useState } from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/product'
import { useParams } from 'react-router-dom'

export default function Product() {
    const { products } = useContext( ProductContext )
    const [ quantity, setQauntiy ] = useState( 1 )
    const { id } = useParams()


    const findCurrentProduct = products.find((product) => product.id == id)
    if(!findCurrentProduct){
        return <h1>Loading Products...</h1>
    }

    const addProductQuantity = () => {
        if( quantity <= 9){
            setQauntiy( quantity + 1)
        }
    }

    const minusProductQuantity = () => {
        if( quantity >= 2 ){
            setQauntiy( quantity - 1)
        }
    }


  return (
    <div>
        <h3>{findCurrentProduct.name}</h3>
        <img src={ findCurrentProduct.img } width='200' height='200' />
        <h2> ${ findCurrentProduct.price } </h2>
        <button onClick={ minusProductQuantity }> - </button>
        <h3>{ quantity }</h3>
        <button onClick={ addProductQuantity }> + </button>
    </div>
  )
}

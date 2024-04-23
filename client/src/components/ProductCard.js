import React, {useState} from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/user'
import { OrderContext } from '../context/order'
import { GuestCartContext } from '../context/guest_cart'
import { ProductContext } from '../context/product'


export default function ProductCard({ product }) {
  const { user, setUser } = useContext( UserContext )
  const { addToOrderObj} = useContext( OrderContext )


  // console.log('USER CART', findUserCart)
const [quantity, setQauntiy] = useState(1)

console.log('quantity', quantity)
const handlePlusQuantity = () => {
  setQauntiy( quantity + 1)
}


const handleSubtractQuantity = () => {
  if( quantity >= 1 ){
    setQauntiy( quantity - 1)
  }
}

  return (
    <div>
        <h3> { product.name } </h3>
        <img src={ product.img } width='200' height='200' />
        <h2> ${ product.price } </h2>
        <button onClick={handleSubtractQuantity}> - </button>
        <h3>{quantity}</h3>
        <button onClick={handlePlusQuantity}> + </button>
        <button onClick={ () => addToOrderObj(product, user, setUser, quantity) }>Add To Cart</button>
    </div>
  )
}

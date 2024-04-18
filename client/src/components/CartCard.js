import React from 'react'

export default function CartCard({ product }) {
    console.log('img', product.img)
  return (
    <div>
         <img src={ product.img } width='200' height='200' />
    </div>
  )
}

import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/user'
import { ProductContext } from '../context/product'
import ProductCard from '../components/ProductCard'

export default function Products() {
    const { products } = useContext( ProductContext )
    

  return (
    <div>
        {products.map((product) => (
            <ProductCard
            key={ product.id }
            product={ product }
            />
        ))}
    </div>
  )
}

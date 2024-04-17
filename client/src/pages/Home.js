import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/product'
import ProductCard from '../components/ProductCard'

export default function Home() {
    const { products } = useContext( ProductContext )

  return (
    <div>
        { products.map((product) => (
            <ProductCard
            key={ product.id }
            product={ product }
            />
        ))}
    </div>
  )
}

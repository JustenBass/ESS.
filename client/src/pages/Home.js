import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/user'
import { ProductContext } from '../context/products'
import CartCard from '../components/CartCard'
import Login from './Login'
import Signup from './Signup'
import ProductsCard from '../components/ProductsCard'

export default function Home() {
    const navigate = useNavigate()
    const {isAuthenticated, user, logoutUser, cart, welcome, cartTotal } = useContext( UserContext )
    const { products } = useContext( ProductContext )



    const handleUserLogoutUserClick = () => {
        fetch('/logout', {
          method: 'DELETE',
          headers: {'Content-Type' : 'application/json'}
        })
        .then(() => {
          logoutUser()
          navigate('/');
        });
      };

    if(!isAuthenticated){
        return (
          <div>
          <Login/>
          <Signup/>
          <br/>
          { products.map((product) => (
          <ProductsCard
          key={ product.id }
          product={ product }
          />
        ))}

        </div>
          )
        } else {
            return (
              <div>
              <div>
                {welcome ? <h3> Welcome back {user.username} </h3> : <h3> Welcome to ESS. {user.username}! We're happy to have you! </h3>}
              </div>
              <br/>
              { products.map((product) => (
                <ProductsCard
                key={ product.id }
                product={ product }
                />
              ))}
              <button onClick={ handleUserLogoutUserClick }> Logout </button>
              <br/>
              <hr/>
              <h4> Your Cart </h4>
              { cart.orders?.map((order) => (
                <CartCard
                key={ order.id }
                order={ order }
                />
              ))}
              <h1>{cart.total}</h1>
            </div>

            )
        }
}

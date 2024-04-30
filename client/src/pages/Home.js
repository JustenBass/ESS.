import React from 'react'
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
    const { user, authenticated, logoutUser} = useContext( UserContext )
    const { products, count} = useContext( ProductContext )



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

    if(authenticated){
        return (
            <div>
              <div>
                <h3> Welcome back {user.username} </h3>
              </div>
              <br/>
              { products.map((product) => (
                <ProductsCard
                key={ product.id }
                product={ product }
                />
              ))}
              <button onClick={() => {
                handleUserLogoutUserClick()
              }}> Logout </button>
              <br/>
              <hr/>
              <h4> Your Cart </h4>
              { user.cart?.orders.map((order) => (
                <CartCard
                key={ order.id }
                order={ order }
                />
              ))}
            </div>
          )
        } else {
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
        }
}

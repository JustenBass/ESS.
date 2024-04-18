import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/user'
import { ProductContext } from '../context/product'
import ProductCard from '../components/ProductCard'
import Login from './Login'
import Signup from './Signup'

export default function Home() {
    const navigate = useNavigate()
    const { user, authenticated, logoutUser } = useContext( UserContext )
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

    if(authenticated){
        return (
            <div>
              <div>
                <h3> Welcome back {user.username} </h3>
              </div>
                { products.map((product) => (
                    <ProductCard
                    key={ product.id }
                    product={ product }
                    />
                ))}

                <button onClick={ handleUserLogoutUserClick}> LOGOUT </button>
            </div>
          )
        } else {
            return (
              <div>
                <Login/>
                <Signup/>
                <div>
                  { products.map((product) => (
                    <ProductCard
                    key={ product.id }
                    product={ product }
                    />
                  ))}
                </div>
              </div>
            )
        }
}

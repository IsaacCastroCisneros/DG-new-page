import React from 'react'
import { useContext } from 'react'
import { appContext } from '../../../../../../context/AppContext'
import CartDetails from './components/CartDetails'

export default function CartItems() 
{
  const{cart}=useContext(appContext)

  return (
    <>
      <CartDetails cartItems={cart} />
    </>
  );
}

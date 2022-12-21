import React from 'react'
import { useContext } from 'react'
import { appContext } from '../../../../../../context/AppContext'
import CardItem from './components/CardItem'
import CartDetails from './components/CartDetails'

export default function CartItems() 
{
  const{cart}=useContext(appContext)

  return (
    <>
      <div className="max-h-[25rem] overflow-y-auto mob2:p-[0]">
        {cart?.map((item) => {
          return <CardItem {...item} />;
        })}
        {/* {cart?.map((item) => {
          return <CardItem {...item} />;
        })} */}
      </div>
      <CartDetails cartItems={cart} />
    </>
  );
}

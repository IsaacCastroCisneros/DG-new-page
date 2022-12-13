import React,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { appContext } from '../../../../context/AppContext';
import { useContext } from 'react';
import Menu from './components/Menu/Menu';

export const cartContext=React.createContext(); 

export default function Cart() 
{
  const{cart,setShowCart,showCart}=useContext(appContext);

  useEffect(()=>
  {
    function removingMenu(e)
    {
      if(e.target.closest('.cartButton')===null)
      {
        setShowCart(false)
      } 
    }

    window.addEventListener('click',removingMenu)

  })

  const tot = cart.reduce((sum,current)=>
  {
    return sum + current.price
  },0)
  
  const contextValues =
  {
    cart
  }

  return (
    <cartContext.Provider value={contextValues}>
      <div className="relative z-[999] text-[#000] flex flex-col justify-center">
        <button
         onClick={()=>setShowCart(prev=>!prev)}
         className="cartButton"
         >
          {cart.length > 0 && (
            <span className="flex items-center justify-center h-[2rem] w-[2rem] bg-red-500 text-[#fff] absolute rounded-[100%] font-bold right-[-.8rem] top-[-.4rem]">
              {cart.length}
            </span>
          )}
          <FontAwesomeIcon size="2xl" icon={faCartShopping} />
        </button>
        <Menu cart={cart} tot={tot} showCart={showCart} />
      </div>
    </cartContext.Provider>
  );
}

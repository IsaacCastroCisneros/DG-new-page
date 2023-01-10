import React,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { appContext } from '../../../../context/AppContext';
import { useContext } from 'react';
import Menu from './components/Menu/Menu';
import { useState } from 'react';
import Button from '../../../Button/Button';

export const cartContext=React.createContext(); 

export default function Cart({mob=false,hideNavBar}) 
{
  const{cart}=useContext(appContext);
  const[showCart,setShowCart]=useState(false)

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
    return ()=> window.removeEventListener('click',removingMenu)
  })

  useEffect(()=>
  {
     if(hideNavBar!==undefined)
     {
       if(hideNavBar.isHide===true)
       {
         setShowCart(false)
       }
     }
  },[hideNavBar])

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
      <div className="relative z-[999] text-[#000] flex flex-col justify-center max-w-[100%]">
        <Button
          onClick={() => setShowCart((prev) => !prev)}
          isContentInside={true}
          styles={{button:'cartButton !w-fit !px-[1rem] !py-[.5rem]'}}
          >
          <p className="flex gap-[1rem] relative w-fit">
            {cart.length > 0 && (
              <span
                className="flex items-center justify-center h-[1.7rem] w-[1.7rem] bg-red-500 text-[#fff] absolute rounded-[100%] font-bold right-[-.8rem] top-[-.4rem]"
                style={
                  mob
                    ? { width: "1.4rem", height: "1.4rem", fontSize: ".8rem" }
                    : {}
                }
              >
                {cart.length}
              </span>
            )}
            {mob && <span className="font-bold">Carrito</span>}
            <FontAwesomeIcon size={mob ? "xl" : "2xl"} icon={faCartShopping} />
          </p>
        </Button>
        {!mob && (
          <Menu
            cart={cart}
            mob={mob}
            tot={tot}
            showCart={showCart}
            setShowCart={setShowCart}
          />
        )}
        {mob && showCart && (
          <Menu
            cart={cart}
            mob={mob}
            tot={tot}
            showCart={showCart}
            setShowCart={setShowCart}
          />
        )}
      </div>
    </cartContext.Provider>
  );
}

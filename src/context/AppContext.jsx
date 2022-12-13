import React,{useEffect,useState} from 'react'

export const appContext = React.createContext()

export default function AppContext({children}) 
{
    const[cart,setCart]=useState([])
    const[showCart,setShowCart]=useState(false)
    const[showNoti,setShowNoti]=useState({show:false,status:'ok'})
    const[showPopUp,setShowPopUp]=useState(false)
    const[showMobMenu,setShowMobMenu]=useState(false)

    useEffect(()=>
    {
        const cart = localStorage.getItem('cart');
        if(cart===null)return
        setCart(JSON.parse(cart))
    },[])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
  
  return (
    <appContext.Provider 
     value=
     {
        {
            setCart,
            cart,
            showCart,
            setShowCart,
            showNoti,
            setShowNoti,
            setShowPopUp,
            showPopUp,
            showMobMenu,
            setShowMobMenu
        }
     }
     >
      {children}
    </appContext.Provider>
  )
}

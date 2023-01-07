import React,{useEffect,useState} from 'react'
import postRequest from '../helpers/postRequest'

export const appContext = React.createContext()

export default function AppContext({children}) 
{
    const[cart,setCart]=useState([])
    const[showCart,setShowCart]=useState(false)
    const[showNoti,setShowNoti]=useState({show:false,status:'ok',msgOk:undefined,msgFail:undefined})
    const[showPopUp,setShowPopUp]=useState({popUp:undefined,show:false})
    const[showMobMenu,setShowMobMenu]=useState(false)
    const[user,setUser]=useState(false) 

    useEffect(()=>
    {
        const cart = localStorage.getItem('cart');
        if(cart===null)return
        setCart(JSON.parse(cart))
    },[])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(()=>
    {
       const currentUser = localStorage.getItem('userDG')
       if(currentUser===null)return

       const form = new FormData()
       form.append('token',JSON.parse(currentUser).token)

       postRequest({type:'validation',data:form})
       .then(res=>
        {
          if(res===false)return
          setUser(res)
        })
      
    },[])
  
    const heeey= ''
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
            setShowMobMenu,
            setUser,
            user,
            heeey
        }
     }
     >
      {children}
    </appContext.Provider>
  )
}

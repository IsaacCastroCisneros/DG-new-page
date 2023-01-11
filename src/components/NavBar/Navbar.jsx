import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkButton from '../LinkButton/LinkButton'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React,{useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import Button from '../Button/Button'
import Cart from './components/Cart/Cart'
import img from '/img/logo-DG-nuevo.webp'
import { useContext } from 'react'
import { appContext } from '../../context/AppContext'
import Login from '../Login/Login'
import UserButton from './components/UserButton/UserButton'
import SignUp from '../SignUp/SignUp'
import { useEffect } from 'react'

export const navBarContext= React.createContext()

export default function Navbar() 
{
  const{setShowMobMenu,user,setShowPopUp}=useContext(appContext)
  const[hideNavBar,setHideNavBar]=useState({isHide:false,prevY:200})

  useEffect(()=>
  {
    function myScrollStuff()
    {
      const y = window.scrollY
      if(y>hideNavBar.prevY)
      {
        setHideNavBar({isHide:true,prevY:y})
        return
      }
      setHideNavBar(prev=>{return {...prev,isHide:false}} )
    }

    window.addEventListener('scroll',myScrollStuff)
   /*  return ()=> window.removeEventListener('scroll',myScrollStuff) */
  })

  const contextValues=
  {
    hideNavBar
  }

  return (
    <navBarContext.Provider value={contextValues}>
      <div className='h-[63.98px]'></div>
      <header className="flex fixed z-[999999999999] bg-[#fff] w-[100%] top-0 transition-all duration-[100ms] ease-in-out shadow-xl"
       style={{transform:hideNavBar.isHide? 'translateY(-100%)':'translateY(0)'}}
       >
        <nav className="flex custom-container justify-between items-center mobNav:!px-[.7rem]">
          <ul className="flex gap-[3rem] font-medium text-myBlack items-stretch min-h-[4rem]">
            <Link
              to="/"
              className="flex items-center w-[12rem] mr-[5rem] mobNav:w-[8rem] mobNav:mr-0"
            >
              <img src={img} className="w-[100%] mobNav:w-[200%]" />
            </Link>
            <NavOption label={"inicio"} path={"/"} />
            <NavOption label={"cursos"} path={"/cursos"} />
            <NavOption label={"diplomas"} path={"/diplomas"} />
            <NavOption label={"diplomados"} path={"/diplomados"} />
          </ul>
          <div className="flex gap-[1rem] items-center">
              <Cart hideNavBar={hideNavBar}/>
            <div className="flex gap-[1.3rem] mobNav:hidden">
              {!user && (
                <Button
                  label="iniciar sesion"
                  onClick={() =>
                    setShowPopUp(prev=>{return{...prev,show: true, popUp: <Login setShow={setShowPopUp}/>}})
                  }
                />
              )}
              {user && (
                <LinkButton
                  label="Aula Virtual"
                  path={"https://aula.desarrolloglobal.pe/aula/#tab_tablero"}
                  target={"_blank"}
                  toOutside={true}
                />
              )}
              {!user && (
                <Button
                  label="registrarse"
                  isGradient={false}
                  styles={{
                    button:
                      "!bg-[transparent] !border-[3px] !border-myPurple !box-border",
                    span: "!text-myPurple",
                  }}
                  onClick={() => 
                    setShowPopUp(prev=>{return{...prev,show: true, popUp: <SignUp setShow={setShowPopUp}/>}})
                  }
                />
              )}
            </div>
            {user && <UserButton {...user} />}
            <button
              className="hidden mobNav:block text-[2rem] text-[#000]"
              onClick={() => {
                setShowMobMenu(true);
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </nav>
      </header>
    </navBarContext.Provider>
  );
}

function NavOption({label,path}) 
{
  const[showUnderLine,setShowUnderLine]=useState(false)

  return (
    <li className="mobNav:hidden relative"
      onMouseEnter={()=>setShowUnderLine(true)}
      onMouseLeave={()=>setShowUnderLine(false)}
     >
      <NavLink to={path} className="text-myGrey2 hover:text-[#000] capitalize flex items-center h-[100%] border-b-[4.3px] border-[transparent] ">
        <span>{label}</span>
      </NavLink>
      <div className='absolute w-[100%] bottom-0 flex justify-center text-center'
       >
        <span
         className={`transition-all duration-200 h-[4.3px] bg-myPurple`}
         style={{width:showUnderLine?'100%':'0%'}}
         ></span>
       </div>
    </li>
  );
}




  
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


export default function Navbar() 
{
  const{setShowMobMenu,user,setShowPopUp}=useContext(appContext)

  return (
    <>
      <header className="flex">
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
            <div className="flex gap-[1.3rem] mobNav:hidden">
              <Cart />
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
    </>
  );
}

function NavOption({label,path}) 
{
  return (
    <li className="mobNav:hidden">
      <NavLink to={path} className="text-myGrey2 relative hover:text-[#000] capitalize flex items-center h-[100%] border-b-[3px] border-[transparent] ">
        <span>{label}</span>
        <div className='absolute bottom-0 w-[100%] h-[2px]'></div>
      </NavLink>
    </li>
  );
}




  
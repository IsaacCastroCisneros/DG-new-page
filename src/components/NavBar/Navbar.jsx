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
import PopUp from '../PopUp/PopUp'
import Login from './components/Login/Login'
import UserButton from './components/UserButton/UserButton'

export default function Navbar() 
{
  const[show,setShow]=useState(false)
  const{setShowMobMenu,user,showMobMenu}=useContext(appContext)

  return (
    <>
      <PopUp
        show={show}
        setShow={setShow}
        popUp={<Login setShow={setShow} />}
      />
      <header className="flex">
        <nav className="flex custom-container py-[.4rem] justify-between items-center mobNav:!px-[.7rem]">
          <ul className="flex gap-[3rem] font-medium text-myBlack items-center">
            <Link
              to="/"
              className="block w-[12rem] mr-[5rem] mobNav:w-[8rem] mobNav:mr-0"
            >
              <img src={img} className="w-[100%] mobNav:w-[200%]" />
            </Link>
            <NavOption label={"inicio"} path={"/"} />
            <NavOption label={"cursos"} path={"/"} />
            <NavOption label={"diplomas"} path={"/"} />
            <NavOption label={"packs"} path={"/"} />
          </ul>
          <div className='flex gap-[1rem] items-center'>
            <div className="flex gap-[1rem] mobNav:hidden">
              <Cart />
              {!user && (
                <Button label="iniciar sesion" onClick={() => setShow(true)} />
              )}
              {user && <LinkButton label="Aula Virtual" />}
              {!user && (
                <Button
                  label="registrarse"
                  styles={{
                    button:
                      "!bg-[transparent] !border-[3px] !border-myPurple !box-border",
                    span: "!text-myPurple",
                  }}
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
    <li className='mobNav:hidden'>
      <NavLink to={path} className="uppercase">
        {label}
      </NavLink>
    </li>
  );
}




  
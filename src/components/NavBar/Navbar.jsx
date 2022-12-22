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
import Login from '../Login/Login'
import UserButton from './components/UserButton/UserButton'
import SiginUp from '../SiginUp/SignUp'
import StatusMsg from '../StatusMsg/StatusMsg'

export default function Navbar() 
{
  const[show,setShow]=useState(false)
  const[showOkPopUp,setShowOkPopUp]=useState({show:false})
  const{setShowMobMenu,user,showMobMenu}=useContext(appContext)

  return (
    <>
      <PopUp
        show={show.show}
        setShow={setShow}
        popUp={show.popUp}
        closeButton={false}
      />
      <PopUp
       closeButton={false}
       show={showOkPopUp.show}
       popUp={
        <StatusMsg
          setShow={setShowOkPopUp}
          status={"success"}
          okMsg={"Te haz registrado con exito!!"}
        />
       }
       />
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
            {/*  <NavOption label={"packs"} path={"/"} /> */}
          </ul>
          <div className="flex gap-[1rem] items-center">
            <div className="flex gap-[1rem] mobNav:hidden">
              <Cart />
              {!user && (
                <Button
                  label="iniciar sesion"
                  onClick={() =>
                    setShow({ show: true, popUp: <Login setShow={setShow}/> })
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
                  onClick={() => setShow({show:true,popUp:<SiginUp setShow={setShow} setShowOkPopUp={setShowOkPopUp} />})}
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
      <NavLink to={path} className="uppercase flex items-center h-[100%] border-b-[3px] border-[transparent] ">
        <span>{label}</span>
      </NavLink>
    </li>
  );
}




  
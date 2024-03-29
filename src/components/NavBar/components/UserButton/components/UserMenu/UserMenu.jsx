import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRightFromBracket,
  faLaptop,
  faUserCircle,
  faLayerGroup,
  faCalendar,
  faWrench
} from "@fortawesome/free-solid-svg-icons";
import React,{useState,useContext} from 'react'
import { appContext } from '../../../../../../context/AppContext';
import postRequest from '../../../../../../helpers/postRequest';
import Button from '../../../../../Button/Button';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function UserMenu({show})
{
  const{setShowPopUp,user}=useContext(appContext)
  const menu = useRef()

  const isShow = show ? {h:lel(),b:'1px',p:'auto'} : {h:0,o:0,b:'0'}

  function lel()
  {
    return menu.current.offsetHeight
  }

  return (
    <div
      className='absolute transition-[height] duration-200 right-0 bottom-0 translate-y-[105%] overflow-hidden'
      style={
        {
          height:isShow.h,
          pointerEvents:isShow.p
        }}
     >
      <ul ref={menu} className="rounded-[.5rem] bg-[#fff] shadow-xl border-[1px] border-gray-300 overflow-hidden">
        <UserMenuOption
          label={"Mi Aula"}
          icon={faLaptop}
          path={"https://aula.desarrolloglobal.pe/aula/#tab_tablero"}
        />
        <UserMenuOption
          label={"Mi Perfil"}
          icon={faUserCircle}
          path={"https://aula.desarrolloglobal.pe/aula/#tab_perfil"}
        />
        <UserMenuOption
          label={"Mis Cursos"}
          icon={faLayerGroup}
          path={"https://aula.desarrolloglobal.pe/aula/#tab_cursos"}
        />
        <UserMenuOption
          label={"Mis Diplomas"}
          icon={faLayerGroup}
          path={"https://aula.desarrolloglobal.pe/aula/#tab_diplomas"}
        />
        <UserMenuOption
          label={"Sesiones Hoy y Mañana"}
          icon={faCalendar}
          path={"https://aula.desarrolloglobal.pe/sesiones_hoy_manana.php"}
        />
        {user?.tipo === "ADMI" && (
          <UserMenuOption
            icon={faWrench}
            label={"Administrador"}
            path={"https://aula.desarrolloglobal.pe/admin/"}
          />
        )}
        <UserMenuOption
          onClick={()=>setShowPopUp(prev=>{return{...prev,show:true,popUp:<AreYouSure setShow={setShowPopUp} />}})}
          icon={faRightFromBracket}
          label={"cerrar sesion"}
        />
      </ul>
    </div>
  );
}

function AreYouSure({setShow})
{
  const{setUser,user}=useContext(appContext)
  const[isLoading,setIsLoading]=useState(false)

  function clossingSession()
  {
    const form = new FormData();
    form.append('token',user.token)
    
    setIsLoading(true)

    postRequest({ type: "logout", data: form }).then((res) => {
      if (res) 
      {
        setIsLoading(false)
        setUser(undefined);
        localStorage.removeItem("userDG");
        setShow(prev=>{return {...prev,show:false,isConfirm:false} })  
        return;
      }
    });
  }

   return (
     <div className="bg-[#fff] px-[3rem] py-[1.5rem] rounded-[.5rem]">
       <h1 className="text-[2rem] mb-[2rem] text-center mobNav:text-[1.5rem]">
         ¿Estas seguro de salir?
       </h1>
       <div className="flex">
         <Button
           label={"ACEPTAR"}
           onClick={clossingSession}
           isLoading={isLoading}
          />
         <button
           className="flex-1 hover:text-blue-500 hover:underline"
           onClick={() => setShow(prev=>{return {...prev,show:false}})}
         >
           Regresar
         </button>
       </div>
     </div>
   );
}

function UserMenuOption(props) 
{
  const
  {
    onClick,
    icon,
    label,
    path=undefined
  }=props

  const styles = "flex gap-[.5rem] items-center hover:bg-[#e9ecef] px-[1rem] max-w-[15rem] py-[.2rem] gap-[.5rem]"

  function MyIcon()
  {
    return (
      <div className='w-[1.5rem] flex justify-center'>
        <FontAwesomeIcon icon={icon} />
      </div>
    );
  }

  return (
    <li className="text-[#212529]">
      {!path && (
        <button className={styles+' w-[100%] text-left'} onClick={onClick}>
          <MyIcon/>
          <span className="w-[100%] whitespace-nowrap overflow-hidden text-ellipsis">
            {label}
          </span>
        </button>
      )}
      {path && (
        <a href={path} target={"_blank"} className={styles}>
          <MyIcon/>
          <span className="w-[100%] whitespace-nowrap overflow-hidden text-ellipsis">
            {label}
          </span>
        </a>
      )}
    </li>
  );
}
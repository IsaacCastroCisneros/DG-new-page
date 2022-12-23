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
import PopUp from '../../../../../PopUp/PopUp';
import postRequest from '../../../../../../helpers/postRequest';

export default function UserMenu()
{
  const[show,setShow]=useState({show:false,isConfirm:false})
  const{setUser,user}=useContext(appContext)

  function clossingSession()
  {
    setShow(prev=>{return {...prev,show:true}})  
  }

  if(show.isConfirm&&user!==undefined)
  {
    const form = new FormData();
    form.append('token',user.token)

    postRequest({ type: "logout", data: form }).then((res) => {
    if (res) {
        setUser(undefined);
        localStorage.removeItem("userDG");
        setShow({show:false,isConfirm:false})  
        return;
    }
    console.log(res + " at closing session");
    });
  }


  return (
    <>
      <PopUp
        show={show.show}
        setShow={setShow}
        popUp={<AreYouSure setShow={setShow} />}
        closeButton={false}
      />
      <ul className="absolute rounded-[.5rem] bg-[#fff] shadow-xl border-[1px] border-gray-300 right-0 bottom-0 translate-y-[105%]">
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
            onClick={clossingSession}
            icon={faWrench}
            label={"Administrador"}
            path={"https://aula.desarrolloglobal.pe/admin/"}
          />
        )}
        <UserMenuOption
          onClick={clossingSession}
          icon={faRightFromBracket}
          label={"cerrar sesion"}
        />
      </ul>
    </>
  );
}

function AreYouSure({setShow})
{
   return (
     <div className="bg-[#fff] px-[3rem] py-[1.5rem] rounded-[.5rem]">
       <h1 className="text-[2rem] mb-[2rem] text-center mobNav:text-[1.5rem]">
         ¿Estas seguro de salir?
       </h1>
       <div className="flex">
         <button
           className="bg-myPurple text-[#fff] font-bold px-[1rem] flex-1 py-[.6rem]"
           onClick={() =>
             setShow((prev) => {
               return { ...prev, isConfirm: true };
             })
           }
         >
           ACEPTAR
         </button>
         <button
           className="flex-1 hover:text-blue-500 hover:underline"
           onClick={() =>
             setShow((prev) => {
               return { ...prev, show: false };
             })
           }
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import React,{useState,useContext} from 'react'
import { appContext } from '../../../../../../context/AppContext';
import PopUp from '../../../../../PopUp/PopUp';
import postRequest from '../../../../../../helpers/postRequest';

export default function UserMenu()
{
  const[show,setShow]=useState({show:false,isConfirm:false})
  const[isConfirm,setIsConfirm]=useState(false)
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
        popUp={<AreYouSure setShow={setShow}/>}
        closeButton={false}
      />
      <ul className="absolute bg-[#fff] min-w-[10rem] shadow-xl px-[1rem] py-[.7rem] border-[1px] border-gray-300 right-0 bottom-0 translate-y-[110%]">
        <li>
          <button
            className="flex gap-[.5rem] items-center hover:text-blue-500"
            onClick={clossingSession}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>cerrar sesion</span>
          </button>
        </li>
      </ul>
    </>
  );
}

function AreYouSure({setShow})
{
   return (
     <div className="bg-[#fff] px-[3rem] py-[1.5rem] rounded-[.5rem]">
       <h1 className="text-[2rem] mb-[2rem] text-center mobNav:text-[1.5rem]">¿Estas seguro de salir?</h1>
       <div className='flex'>
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
           className='flex-1 hover:text-blue-500 hover:underline'
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
import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { appContext } from '../../../../context/AppContext';
import Cart from '../Cart/Cart';
import Button from '../../../Button/Button';
import LinkButton from '../../../LinkButton/LinkButton';
import Login from '../../../Login/Login';
import SignUp from '../../../SignUp/SignUp';
import StatusMsg from '../../../StatusMsg/StatusMsg';

export default function MobMenu() 
{
  const{showMobMenu,setShowMobMenu,user,setShowPopUp}=useContext(appContext)
  const active = showMobMenu ? 'translate-x-[0]' : 'translate-x-[-100%]'

  return (
    <>
      <div
        className={`fixed transition-all duration-200 w-[355px] border-r-[1px] border-gray-300 py-[1rem] px-[1.2rem] bg-[#fff] h-[100%] top-0 left-0 z-[9999999999999] ${active} overflow-y-auto`}
      >
        <button
          onClick={() => setShowMobMenu(false)}
          className="absolute text-[2rem] text-[#000] right-[1.2rem]"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <Link className="w-[13rem] block" to={"/"}>
          <img src="/img/logo-DG-nuevo.webp" className="w-[100%]" alt="" />
        </Link>
        <ul className="flex flex-col mt-[1.3rem] gap-[1rem]">
          <MobMenuOption
            path={"/"}
            label={"Inicio"}
            onClick={() => setShowMobMenu(false)}
          />
          <MobMenuOption
            path={"/cursos"}
            label={"Cursos"}
            onClick={() => setShowMobMenu(false)}
          />
          <MobMenuOption
            path={"/diplomas"}
            label={"Diplomas"}
            onClick={() => setShowMobMenu(false)}
          />
          <MobMenuOption
            path={"/diplomados"}
            label={"Diplomados"}
            onClick={() => setShowMobMenu(false)}
          />
          <Cart mob={true} />
          {!user && (
            <Button
              label="iniciar sesion"
              onClick={() => {
                setShowMobMenu(false);
                setShowPopUp((prev) => {
                  return {
                    ...prev,
                    show: true,
                    popUp: <Login setShow={setShowPopUp} />,
                  };
                });
              }}
              styles={{ button: "!border-[3px] !border-myPurple" }}
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
              onClick={() => {
                setShowMobMenu(false);
                setShowPopUp((prev) => {
                  return {
                    ...prev,
                    show: true,
                    popUp: <SignUp setShow={setShowPopUp} />,
                  };
                });
              }}
            />
          )}
        </ul>
      </div>
    </>
  );
}

function MobMenuOption({path,label,onClick}) 
{
  return (
    <li className="text-[#000] font-bold">
      <button
       onClick={onClick}
       >
      <Link to={path}>{label}</Link>
      </button>
    </li>
  );
}
  
import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Button from '../Button/Button'
import img from '/img/logo-DG-nuevo.webp'

export default function Navbar() {
  return (
    <header className="flex">
      <nav className="flex custom-container py-[.4rem] justify-between items-center">
        <ul className="flex gap-[3rem] font-medium text-myBlack items-center">
          <Link to="/" className="block w-[12rem] mr-[5rem]">
            <img src={img} className="w-[100%]" />
          </Link>
          <NavOption  label={'inicio'} path={'/'}/>
          <NavOption  label={'cursos'} path={'/'}/>
          <NavOption  label={'diplomas'} path={'/'}/>
          <NavOption  label={'packs'} path={'/'}/>
        </ul>
        <div className="flex gap-[1rem] mobNav:hidden">
          <Button label="aula virtual" />
          <Button
            label="registrarse"
            styles={{
              button: "!bg-[transparent] !border-[3px] !border-myPurple !box-border",
              span: "!text-myPurple",
            }}
          />
        </div>
      </nav>
    </header>
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
  
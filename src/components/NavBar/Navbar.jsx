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
          <li>
            <NavLink to="/" className="uppercase">
              inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="uppercase">
              cursos
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="uppercase">
              diplomas
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="uppercase">
              packs
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-[1rem]">
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

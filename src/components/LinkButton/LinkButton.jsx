import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LinkButton(props) 
{
  const 
  { 
    label, 
    styles, 
    path = "/", 
    toOutside = false,
    target,
    icon=false
  } = props;

  const{button='',span=''} = styles || {}

  return (
    <>
      {!toOutside && (
        <Link
          to={path}
          className={`bg-myPurple rounded-[.3rem] px-[2.1rem] block py-[.2rem] ${button}`}
          target={target}
        >
          {icon.icon && <FontAwesomeIcon size={icon.size} icon={icon.icon} />}
          <span
            className={`capitalize text-[#fff] text-center block text-[1rem] ${span}`}
          >
            {label}
          </span>
        </Link>
      )}
      {toOutside && (
        <a
          href={path}
          className={`bg-myPurple rounded-[.3rem] px-[2.1rem] block py-[.2rem] ${button}`}
          target={target}
        >
          <span
            className={`capitalize text-[#fff] text-center block text-[1rem] ${span}`}
          >
            {label}
          </span>
        </a>
      )}
    </>
  );
}

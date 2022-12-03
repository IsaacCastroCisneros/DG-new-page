import React from 'react'
import { Link } from 'react-router-dom';

export default function LinkButton(props) 
{
  const
  {
    label,
    styles,
    path='/'
  }=props

  const{button='',span=''} = styles || {}

  return (
    <Link to={path} className={`bg-myPurple rounded-[.3rem] px-[2.1rem] block py-[.2rem] ${button}`}>
      <span className={`capitalize text-[#fff] text-center block text-[1.3rem] ${span}`}>
        {
          label
        }
      </span>
    </Link>
  );
}

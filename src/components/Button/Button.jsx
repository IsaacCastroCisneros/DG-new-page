import React from 'react'
import { myGradient } from '../../MyStyles/MyStyles';

export default function Button(props) 
{
  const
  {
    label,
    styles,
    onClick,
    type,
    isGradient=true
  }=props

  const{button='',span=''} = styles || {}

  return (
    <button className={`${isGradient? myGradient:''} rounded-[.3rem] px-[2.1rem] py-[.2rem] ${button}`}
     onClick={onClick}
     type={type}
     >
      <span className={`capitalize text-[#fff] ${span}`}>
        {
          label
        }
      </span>
    </button>
  );
}

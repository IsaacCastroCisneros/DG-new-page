import React from 'react'

export default function Button(props) 
{
  const
  {
    label,
    styles,
    onClick,
    type
  }=props

  const{button='',span=''} = styles || {}

  return (
    <button className={`bg-myPurple rounded-[.3rem] px-[2.1rem] py-[.2rem] ${button}`}
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

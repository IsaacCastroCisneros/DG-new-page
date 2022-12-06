import React from 'react'

export default function Button(props) 
{
  const
  {
    label,
    styles,
    onClick
  }=props

  const{button='',span=''} = styles || {}

  return (
    <button className={`bg-myPurple rounded-[.3rem] px-[2.1rem] py-[.2rem] ${button}`}
     onClick={onClick}
     >
      <span className={`capitalize text-[#fff] text-[1.3rem] ${span}`}>
        {
          label
        }
      </span>
    </button>
  );
}

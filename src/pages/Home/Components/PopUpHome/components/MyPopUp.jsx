import React from 'react'

export default function MyPopUp(props)
{
  const
  {
    webp,
    enlace
  }=props

  return(
    <a
     href={enlace}
     className="bg-[#fff] p-[1rem] rounded-[.5rem]"
     >
        <img className='w-[100%] rounded-[.5rem]' src={webp} alt="" />
    </a>
  )
}

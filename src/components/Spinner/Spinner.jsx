import React from 'react'
import {MoonLoader} from 'react-spinners'

export default function Spinner({size=100,style}) {
  return (
    <div className={`flex justify-center text-blue-400 mb-[1rem] ${style}`}>
        <MoonLoader size={size} color={"rgb(96,165,250)"} />
    </div>
  )
}

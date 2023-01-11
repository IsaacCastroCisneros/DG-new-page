import React from 'react'
import { myGradient } from '../../MyStyles/MyStyles';
import Spinner from '../Spinner/Spinner'

export default function Button(props) 
{
  const
  {
    label,
    styles,
    onClick,
    type,
    isGradient=true,
    isContentInside=false,
    children,
    isLoading
  }=props

  const{button='',span=''} = styles || {}

  return (
    <button
      className={`${
        isGradient ? myGradient : ""
      } rounded-[.3rem] px-[2.1rem] py-[.2rem] ${button} relative`}
      onClick={onClick}
      type={type}
    >
      {!isContentInside && (
        <span
          className={`capitalize text-[#fff] ${span} ${
            isLoading ? "opacity-0" : "opacity-1"
          }`}
        >
          {label}
        </span>
      )}
      {isContentInside && <>{children}</>}
      <div className="absolute left-0 top-0 h-[100%] w-[100%] flex justify-center items-center">
        <Spinner
          color="#fff"
          style={`${
            isLoading ? "opacity-1" : "opacity-0"
          } !mb-[0]`}
          size={23}
        />
      </div>
    </button>
  );
}

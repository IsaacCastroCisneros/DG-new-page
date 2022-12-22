import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function CloseButton({closeFunc}) 
{
  return (
    <button
      className="text-[#fff] border-[2px] border-[#fff] bg-[#000] w-[3rem] h-[3rem] flex justify-center items-center rounded-[100%] absolute text-[1.5rem] right-[-.5rem] top-[-.5rem]"
      onClick={closeFunc}
    >
      {<FontAwesomeIcon icon={faXmark} />}
    </button>
  );
}

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MyMsg({ icon,styles,label }) 
{
  return (
    <p
      className={`flex gap-[.5rem] z-[99999] px-[.5rem] py-[.2rem] rounded-[.5rem] left-[50%] translate-x-[-50%] translate-y-[-50%] items-center text-[#fff] absolute top-0 ${styles}`}
    >
      <span>
        <FontAwesomeIcon size="xl" icon={icon} />
      </span>
      <span className=' whitespace-nowrap' >{label}</span>
    </p>
  );
}

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Row({icon, text,label=''}) 
{
  return (
    <span className="flex items-center">
      <p className=" text-blue-500">
        <FontAwesomeIcon icon={icon} />
      </p>
      &nbsp;
      <p className='phone:text-[12px]'>
        {label}
        {text}
      </p>
    </span>
  );
}

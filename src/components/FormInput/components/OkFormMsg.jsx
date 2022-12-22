import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons' 

export default function OkFormMsg({styles='',okInside}) {
  return (
    <span className={`absolute right-0 text-green-500 text-[2rem] translate-x-[120%] ${styles}`}>
      {!okInside&&<FontAwesomeIcon icon={faCheckCircle} />} 
      {okInside&&<FontAwesomeIcon size='xs' icon={faCheck} />} 
    </span>
  );
}

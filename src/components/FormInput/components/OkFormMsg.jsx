import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

export default function OkFormMsg({styles=''}) {
  return (
    <span className={`absolute right-0 text-green-500 text-[2rem] translate-x-[120%] ${styles}`}>
      <FontAwesomeIcon icon={faCheckCircle} />
    </span>
  );
}

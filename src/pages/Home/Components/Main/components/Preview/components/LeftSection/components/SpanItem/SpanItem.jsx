import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SpanItem({ label,icon }) 
{
  return (
    <>
      <span className="flex text-myPurple items-center gap-[.6rem]">
        <FontAwesomeIcon icon={icon} />
        {label}
      </span>
    </>
  );
}

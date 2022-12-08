import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function PriceLink(props) 
{
    const 
    {
        icon,
        path='/',
        label,
        styles=''
    }=props

    return (
      <Link
        to={path}
        className={`border-[3.5px] items-center px-[1.5rem] flex gap-[1.5rem] py-[.3rem] rounded-[.5rem] border-myPurple text-myPurple text-[20px] ${styles} previewMob:text-[15px]`}
      >
        <span className='text-[2rem] previewMob:text-[1.5rem]'>
          <FontAwesomeIcon icon={icon} />
        </span>
        <span className="font-medium">{label}</span>
      </Link>
    );
}

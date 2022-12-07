import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';

export default function Prices({precio}) 
{
  return (
    <>
      <section className="flex items-center gap-[2rem] mb-[.5rem] previewMob:gap-[.5rem] previewMob:justify-between previewMob:flex-col previewMob:items-start previewMob:mb-[1rem]">
        <div className="flex items-center gap-[.5rem]">
          <strong className="text-[#fff] text-[1.5rem] previewMob:text-[1rem] previewMob:w-[1.8rem] previewMob:h-[1.8rem] flex justify-center items-center bg-myPurple w-[2.5rem] h-[2.5rem] rounded-[100%]">
            S/
          </strong>
          <strong className="text-[36px] font-medium previewMob:text-[25px]">
            {Number(precio.final).toFixed(2)}
          </strong>
        </div>
        <span className="text-red-500 font-medium">
          Normal:&nbsp;
          <span className="line-through">
            S/
            {Number(precio.normal).toFixed(2)}
          </span>
        </span>
      </section>
      <strong className="flex gap-[.6rem] items-center previewMob:text-[.8rem]">
        <span className="text-myPurple text-[1.4rem]">
          <FontAwesomeIcon icon={faCircleDot} />
        </span>
        Modalidad Virtual Asincrónica
      </strong>
    </>
  );
}

import React from 'react'

export default function BeniBox({title,subTitle,img}) 
{
    return (
      <div className='flex gap-[1rem] items-center'>
        <div className='w-[43px]'>
          <img src={img} className='w-[100%]' alt="" />
        </div>
        <p className="flex-1 flex flex-col text-[20px] product:text-[16px]">
          <strong>{title}</strong>
          <span>{subTitle}</span>
        </p>
      </div>
    );
}

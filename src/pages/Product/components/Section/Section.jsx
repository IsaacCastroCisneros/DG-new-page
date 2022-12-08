import React from 'react'

export default function Section({title,body}) 
{
  return (
    <div className='pt-[1.5rem] pb-[2rem] px-[3.6rem] border-[1px] border-gray-300 rounded-[1rem] mb-[2rem] product:px-[1.5rem]'>
        <h1 className='text-[26px] mb-[1.2rem]'>
           {title}
           <span className='block border-b-[3px] border-myPurple w-[20%] mt-[.6rem]'></span>
        </h1>
        {
            body
        }
    </div>
  )
}

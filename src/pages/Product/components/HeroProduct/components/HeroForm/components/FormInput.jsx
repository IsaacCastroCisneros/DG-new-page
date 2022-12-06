import React from 'react'

export default function FormInput({placeHolder,icon}) 
{
  return (
    <div className="flex h-[45px] items-center gap-[1rem] bg-[#fff] px-[1rem] rounded-[.5rem] min-w-[280px]">
      <div className='w-[17px]'>
        <img src={icon} className="w-[100%]" />
      </div>
      <input type="text" placeholder={placeHolder} className="outline-none text-myBlack placeholder:text-placeHolder placeholder:font-medium flex-1" />
    </div>
  );
}

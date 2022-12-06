import React from 'react'

export default function BoxItem(props) 
{
   const
   {
    label,
    img,
    color,
    text="myGreen"
   }=props

    return (
    <div className="flex items-center flex-1 justify-between">
        <div className={`bg-${color} basis-[95px] h-[95px] flex justify-center items-center rounded-[100%]`}>
          {img}
        </div>
        <p className={`text-${text} text-[20px] max-w-[16rem]`}>
         {label}
        </p>
    </div>
    );
}

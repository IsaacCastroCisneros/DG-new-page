import React from 'react'

export default function Box({label,icon,profesores=false}) 
{
  return (
    <div className="flex-1 flex gap-[1rem]">
      {icon}
      <p className="text-[#fff] capitalize font-medium flex-[2] text-[1.2rem] phone:text-[13px]">
        {!profesores&&<>{label}</>}
        {
          profesores&&<span>profesores<br/>expertos</span>
        }
      </p>
    </div>
  );
}

import React from 'react'

export default function Box({label,icon}) 
{
  return (
    <div className="flex-1 flex gap-[1rem]">
      {icon}
      <p className="text-[#fff] capitalize font-medium flex-[2] text-[1.2rem]">{label}</p>
    </div>
  );
}

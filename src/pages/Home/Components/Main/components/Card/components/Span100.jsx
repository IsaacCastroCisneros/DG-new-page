import React from 'react'

export default function Span100({type}) 
{
    return (
      <span className="inline-flex gap px-[3rem] py-[.2rem] rounded-[1rem] shadow-lg absolute top-0 translate-y-[-50%] bg-[#fff] left-[50%] translate-x-[-50%]">
        <p className="capitalize">{type}</p>
        &nbsp;
        <p className=" whitespace-nowrap">100% Virtual</p>
      </span>
    );
}

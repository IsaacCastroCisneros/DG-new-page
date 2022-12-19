import React from 'react'

export default function Simple(props) 
{
    const 
    {
      placeHolder,
      icon,
      onChange,
      errLabel = undefined,
      onKeyPress,
    } = props;

    return(
        <input type="text" className="block w-[100%] border-[1px] border-gray-300 rounded-[.2rem] px-[.7rem] py-[.8rem] focus:border-myPurple focus:outline-none" placeholder={placeHolder} />
    )
}

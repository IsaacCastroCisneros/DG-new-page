import React from 'react'

export default function Input({placeholder,myStyles}) 
{
    return(
        <input type="text" className={myStyles} placeholder={placeholder} />
    )
}

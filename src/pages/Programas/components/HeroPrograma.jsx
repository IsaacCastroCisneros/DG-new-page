import React from 'react'

export default function HeroPrograma({type}) {
  return (
    <div className='bg-myPurple'>
      <div className='custom-container2 !py-[3rem]'>
        <h1 className='text-[#fff] text-[3rem] phone:text-[1.5rem]'>
            <span className='capitalize'>{type}</span> Grabados:
        </h1>
      </div>
    </div>
  )
}

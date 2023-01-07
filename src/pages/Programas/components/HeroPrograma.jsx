import React from 'react'

export default function HeroPrograma({type,myRandomBg}) 
{
  
 /*  const{data:}

  let bgs = [];

  if (data !== undefined&&type!==myType) {
    for (let i = 0; i < (data.length < 20 ? data.length : 20); i++) {
      bgs = [...bgs, data[i].imagen];
    }
  }

  const myRandomBgs=theRandomizer(bgs) */

  return (
    <div className='relative'
      style=
      {
        {
          /* backgroundImage:`url("${myRandomBg}")`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          backgroundPosition:'center top' */
        }
      }
     >
      <div className='absolute w-[100%] h-[100%] z-[9] bg-gradient-to-b from-[#3c11f0] to-myPurple'>
      </div>
      <div className='custom-container2 !py-[4rem] relative z-[99] text-[#fff] phone:!py-[2rem]'>
        <strong className='text-[#fff] text-[2.5rem] phone:text-[1rem]'>
           Nuestros
        </strong>
        <h1 className='text-[#fff] text-[5rem] uppercase mob:text-[3rem] phone:text-[1.5rem]'>
            <span>{type}</span> Grabados
        </h1>
      </div>
    </div>
  )
}

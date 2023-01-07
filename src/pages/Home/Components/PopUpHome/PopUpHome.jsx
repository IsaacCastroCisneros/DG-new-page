import React from 'react'
import MyPopUp from './components/MyPopUp'

export default function PopUpHome({popUps})
{
  return(
    <div className='flex gap-[1rem] phone:flex-col'>
       {
         popUps?.map(popUp=>
          {
            return <MyPopUp {...popUp}/>
          })
       }
    </div>
  )
}

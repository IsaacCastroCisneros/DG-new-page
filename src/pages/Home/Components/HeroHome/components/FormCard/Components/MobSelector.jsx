import React from 'react'

const myStyles='px-[1rem] py-[.6rem] border-b-[1px] border-gray-300'

export default function MobSelector(props) 
{
  const
  {
    show=false,
    setShow,
    cursos,
    diplomas,
    diplomados,
    onChange
  }=props

  return (
    <>
      {show && (
        <>
          <div className="fixed w-[100%] h-[100%] bg-[#000] opacity-[.8] z-[9999999999] left-0 top-0"
           ></div>
          <div className="myContainer flex justify-center items-center fixed z-[99999999999] w-[100%] h-[100%] left-0 top-0"
           onClick={(e)=>
            {
              if(e.target.matches('.myContainer')||e.target.matches('.myRadio'))
              {
                setShow(false)
              }
            }}
           >
            <div className="bg-[#fff] overflow-hidden rounded-[.8rem] max-w-[25rem] h-[35rem]">
              <form className='overflow-y-auto h-[100%]' onChange={onChange}>
               <MobSelectorSubTitle label={'cursos'} />
               {
                cursos?.map(c=>
                    {
                        return(
                            <MobSelectorOption label={c.titulo} value={c.id}/>
                        )
                    })
               }
               <MobSelectorSubTitle label={'diplomas'} />
               {
                diplomas?.map(d=>
                    {
                        return(
                            <MobSelectorOption label={d.titulo} value={d.id}/>
                        )
                    })
               }
               <MobSelectorSubTitle label={'diplomados'} />
               {
                diplomados?.map(mado=>
                    {
                        return(
                            <MobSelectorOption label={mado.titulo} value={mado.id}/>
                        )
                    })
               }
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function MobSelectorOption({label,value})
{
    return(
      <div className={`${myStyles} flex items-center justify-between gap-[1rem]`}>
        <label>{label}</label>
        <input type="radio" className='scale-[150%] myRadio' value={value} name='ass'/>
      </div>
    )
}

function MobSelectorSubTitle({label})
{
    return(
      <strong className={`${myStyles} block text-[1.2rem] capitalize`} >
         {label}
      </strong>
    )
}

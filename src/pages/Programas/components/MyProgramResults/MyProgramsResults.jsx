import React,{useState} from 'react'
import ProgramSearcher from '../ProgramSearcher/ProgramSearcher'
import ErrorMsg from '../../../../components/ErrorMsg/ErrorMsg'
import Spinner from '../../../../components/Spinner/Spinner'
import removeDiacritics from '../../../../helpers/removeDiacritics'
import Card from '../../../Home/Components/Main/components/Card/Card'
import { useEffect } from 'react'

export default function MyProgramsResults({data,isFetching,type}) 
{
    const[search,setSearch]=useState('')

    const regex= new RegExp(`${search}`,'gi')

    const myResults= data?.filter(dat=> regex.test(removeDiacritics(dat.titulo.toLowerCase())))

    useEffect(()=>
    {
       setSearch('')
    },[data])

  return (
    <>
      {data?.err == undefined &&
       <div
        className='flex justify-center mb-[2rem]'
        >
         <ProgramSearcher value={search} setSearch={setSearch} />
       </div> 
      }
      {data?.err === undefined && (
        <>
          {isFetching && <Spinner />}
          {!isFetching && (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-[2.5rem] px-[3rem] phone:px-[0]">
              {myResults?.map((card) => {
                return <Card key={card.id} type={type} {...card} />;
              })}
            </div>
          )}
        </>
      )}
    </>
  );
}

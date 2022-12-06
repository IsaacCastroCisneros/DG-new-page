import React from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner';
import useMyQuery from '../../customHooks/useMyQuery/useMyQuery';
import HeroProduct from './components/HeroProduct/HeroProduct';

export default function Product({type}) 
{
  const{id:tag}=useParams();
  
  const{data,isFetching}=useMyQuery({type,tag});

  return (
    <main>
     {
       isFetching&&<Spinner size={200} style={"mt-[4rem]"} />
     }
     {!isFetching && <HeroProduct {...data} />}
    </main> 
  )
}

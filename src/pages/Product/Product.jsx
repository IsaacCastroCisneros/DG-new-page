import React from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner';
import useMyQuery from '../../customHooks/useMyQuery/useMyQuery';
import HeroProduct from './components/HeroProduct/HeroProduct';
import PorQueParticipar from './components/PorQueParticipar/PorQueParticipar';
import RiteCardPrice from './components/RiteCardPrice/RiteCardPrice';

export default function Product({type}) 
{
  const{id:tag}=useParams();
  
  const{data,isFetching}=useMyQuery({type,tag});

  return (
    <>
      {isFetching && <Spinner size={200} style={"mt-[4rem]"} />}
      {!isFetching && (
        <>
          <HeroProduct {...data} />
          <main className="custom-container3 flex pt-[5rem]">
            <section className='flex-[3]'>
              <PorQueParticipar />
            </section>
            <aside className='flex-[1]'>
                <RiteCardPrice/>
            </aside>
          </main>
        </>
      )}
    </>
  );
}

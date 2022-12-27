import React from 'react'
import HeroProductSection from './components/HeroProductSection/HeroProductSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import HeroForm from './components/HeroForm/HeroForm'
import HeroBar from './components/HeroBar/HeroBar'
import { useContext } from 'react'
import { productContext } from '../../Product'

export default function HeroProduct(props) 
{
  const producDataContext = useContext(productContext);

  const
  {
    imagen,
  }=props

  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${imagen})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute left-0 top-0 bg-myOpacity w-[100%] h-[100%] opacity-[.9] z-[10]"></div>
      <div className="custom-container3 relative z-[20] flex gap-[3rem] heroProduct:gap-0 items-center py-[4.5rem] heroProduct:pt-[2rem] heroProduct:pb-0 h-[100%]  heroProduct:flex-col">
        <HeroProductSection
          icon={<FontAwesomeIcon icon={faBook}/>}
          {...props}
        />
        <HeroForm {...producDataContext} />
        <HeroBar {...props}/>
      </div> 
    </div>
  );
}



  

  
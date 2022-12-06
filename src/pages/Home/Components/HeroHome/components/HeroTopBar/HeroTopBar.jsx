import React from 'react'

export default function HeroTopBar() 
{
    return (
      <div className="bg-myGreen flex py-[1.5rem] phone:py-[.8rem]">
        <div className="custom-container2 flex items-center gap-[.5rem]">
          <strong className="uppercase text-myBlack text-[1.3rem] flex-[1] phone:flex-[4.5] topText:text-[.9rem] topText:hidden phone:block phone:text-[.8rem]">
            accede a más de 80 especializaciones
          </strong>
          <section className="flex gap-[.5rem] flex-[5]">
            <div className="flex-1">
              <img src="/img/hero-icon/1.png" className="w-[100%]" />
            </div>
            <div className="flex-1">
              <img src="/img/hero-icon/2.png" className="w-[100%]" />
            </div>
            <div className="flex-1">
              <img src="/img/hero-icon/3.png" className="w-[100%]" />
            </div>
            <div className="flex-1">
              <img src="/img/hero-icon/4.png" className="w-[100%]" />
            </div>
            <div className="flex-1 phone:hidden">
              <img src="/img/hero-icon/5.png" className="w-[100%]" />
            </div>
            <div className="flex-1 phone:hidden">
              <img src="/img/hero-icon/6.png" className="w-[100%]" />
            </div>
            <div className="flex-1 phone:hidden">
              <img src="/img/hero-icon/7.png" className="w-[100%]" />
            </div>
            <div className="flex-1 phone:hidden">
              <img src="/img/hero-icon/8.png" className="w-[100%]" />
            </div>
            <div className="flex-1 phone:hidden">
              <img src="/img/hero-icon/9.png" className="w-[100%]" />
            </div>
            <div className="flex-1 phone:hidden">
              <img src="/img/hero-icon/10.png" className="w-[100%]" />
            </div>
            <div className="flex-1 phone:hidden">
              <img src="/img/hero-icon/11.png" className="w-[100%]" />
            </div>
            <div className="flex-1 phone:hidden">
              <img src="/img/hero-icon/12.png" className="w-[100%]" />
            </div>
            <div className="flex-1 phone:hidden">
              <img src="/img/hero-icon/13.png" className="w-[100%]" />
            </div>
            <div className="flex-1 phone:hidden">
              <img src="/img/hero-icon/14.png" className="w-[100%]" />
            </div>
          </section>
        </div>
      </div>
    );
  }

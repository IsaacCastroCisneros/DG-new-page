import React from 'react'
import HeroBanner from './components/HeroBanner/HeroBanner';
import HeroTopBar from './components/HeroTopBar/HeroTopBar';
import UnderBar from './components/UnderBar/UnderBar';

export default function HeroHome() {
  return (
    <>
      <HeroTopBar />
      <HeroBanner />
      <UnderBar />
    </>
  );
}
    
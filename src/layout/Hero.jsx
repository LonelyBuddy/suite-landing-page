import React from 'react';

import { HeroIntro } from '../components/HeroIntro';
import { HeroImage } from '../components/HeroImage';
import { StatesList } from '../components/StatesList';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="myContainer pt-[56px] md:pt-[80px] xl:pt-[67px] 
      grid gap-8
      md:grid-cols-[408px_77px_204px] md:grid-rows-[1fr_83px] md:gap-0 md:place-content-center md:gap-y-[88px]
      lg:grid-cols-[minmax(408px,_auto)_minmax(77px,_146px)_204px_auto] lg:grid-rows-1 
      xl:place-content-start
      "
    >
      <HeroIntro className="md:row-[1/2] md:col-[1/3]" />
      <HeroImage className="md:row-[1/2] md:col-[2/4]" />
      <StatesList className="md:col-span-full lg:row-[1/2] lg:col-[4/5]" />
    </section>
  );
};

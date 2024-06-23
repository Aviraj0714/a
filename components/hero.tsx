import React from 'react'
import { Spotlight } from './ui/spotlight'
import {TextGenerateEffect} from'./ui/textgenrateffect'
import { Magicbutton } from './ui/magicbutton'
import { FaLocationArrow } from 'react-icons/fa'

export const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple"/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
    </div>
    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
    <div className='flex relative my-20 z-10 justify-center'>
<div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center '>
<h2 className='text-xs tracking-widest text-center max-w-80 text-blue-100 uppercase'>Dynamic webpage</h2>
<TextGenerateEffect
className='text-cente text-[40px] md:text-5xl lg:text-6xl '
words="Transforming Concepts into seamless experiences"
>
</TextGenerateEffect>
<p className='tet-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl '>Hi,I am aviraj Bhaliya, a Web Developer</p>
<a href="#about">
  <Magicbutton
              title="Show my Work" icon={<FaLocationArrow></FaLocationArrow>} position='right'/>
</a>
</div>
    </div>
    </div>
  )
}

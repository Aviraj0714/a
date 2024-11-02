import React from 'react'
import { Spotlight } from './ui/spotlight'
import {TextGenerateEffect} from'./ui/textgenrateffect'
import { Magicbutton } from './ui/magicbutton'
import { FaLocationArrow } from 'react-icons/fa'
import { Button } from './ui/movingborder'





export const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple"/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
    </div>
     
    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-50 left-0 flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
    
    <div className='flex relative my-20 z-10 justify-center'>
    
   
<div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center '>

<h2 className='text-xs tracking-widest text-center max-w-80 text-blue-100 uppercase'>Aviraj&#39;s Portfolio</h2>

<TextGenerateEffect
className='text-cente text-[40px] md:text-5xl lg:text-6xl '
words="Transforming Concepts into seamless experiences"
>
</TextGenerateEffect>
<div className="grid lg:grid-cols-1 grid-cols-1 gap-10 mt-10">
    
        <Button
        duration={Math.floor(Math.random()*10000)+10000}
        className='flex-1 text border-neutral-200 dark:border-slate-800'
        >
            <div className='flex flex-col p-3 py-6 lg:p-10 lg:flex-row lg:items-center'>
                <img src="/photo.jpeg" alt="t" className='lg:w-50 md:w-60 w-40' />
                
            </div>
        </Button>
   
</div>

<p className='tet-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl pt-5 '>Hi,I am Aviraj Bhaliya, a Web Developer</p>
<a href="https://drive.google.com/file/d/1RDRzVOWCEicrS0eD8cBF_oiacMBOxjYr/view?usp=sharing">
  <Magicbutton
              title="Resume" icon={<FaLocationArrow></FaLocationArrow>} position='right'/>
</a>
</div>
    </div>
    </div>
  )
}

import { workExperience } from '@/data'
import React from 'react'
import { Button } from './movingborder'

const Experience = () => {
  return (
    <div className='py-20'>
<h1 className="heading">
    My
    <span className='text-purple'> Work Experience</span>
</h1>
<div className="grid lg:grid-cols-4 w-full grid-cols-1 gap-10 mt-10">
    {workExperience.map((card)=>(
        <Button key={card.id}
        duration={Math.floor(Math.random()*10000)+10000}
        className='flex-1 text border-neutral-200 dark:border-slate-800'
        >
            <div className='flex flex-col p-3 py-6 lg:p-10 lg:flex-row lg:items-center gap-2'>
                <img src={card.thumbnail} alt="t" className='lg:w-32 md:w-20 w-16' />
                <div className='lg:ms-5'>
                    <h1 className='text-start text-xl md:text-2xl font-bold '>
                        {card.title}
                    </h1>
                    <p className='mt-3 font-semibold text-start text-white-100 '>
                        {card.desc}
                    </p>
                </div>
            </div>
        </Button>
    ))}
</div>
    </div>
  )
}

export default Experience
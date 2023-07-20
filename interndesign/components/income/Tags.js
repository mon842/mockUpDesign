import React from 'react'
import { Roboto_Slab } from 'next/font/google'

const robo = Roboto_Slab({ subsets: ['latin'] })

const Tags = (props) => {
  return (
    <div className={`mb-5 `}>
        <p className={` ${robo.className} font-bold text-2xl`}>{props.amt}</p>
        <p  className=' text-gray-400 text-sm'>{props.txt}</p>
        <p className='h-1 w-5/6 bg-indigo-200'></p>
    </div>
  )
}

export default Tags
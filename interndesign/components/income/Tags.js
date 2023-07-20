import React from 'react'

const Tags = (props) => {
  return (
    <div className='mb-5'>
        <p className=' font-bold text-2xl'>{props.amt}</p>
        <p  className=' text-gray-400 text-sm'>{props.txt}</p>
        <p className='h-1 w-5/6 bg-indigo-200'></p>
    </div>
  )
}

export default Tags
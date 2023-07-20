import React from 'react'

const Tags = (props) => {
  return (
    <div>
        <p className=' font-bold text-2xl'>{props.amt}</p>
        <p  className=' text-gray-400 text-sm'>{props.txt}</p>
        <p className='h-1 w-2/3 bg-indigo-400'></p>
    </div>
  )
}

export default Tags
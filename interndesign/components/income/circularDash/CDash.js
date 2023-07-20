import React from 'react'
import CircularProcess from './CircularProcessTab'

const CDash = () => {
  return (
    <div className='flex justify-between space-x-10 mt-10 lg:mt-4'>
        <div >
          <CircularProcess/>
          <p className='font-bold text-xs text-gray-500 mx-4'>Average</p>
        </div>
        
        <div>
          <CircularProcess/>
          <p className='font-bold text-xs text-gray-500 mx-6'>Top</p>
        </div>

        <div>
          <CircularProcess/>
          <p className='font-bold text-xs text-gray-500 mx-6'>Me</p>
        </div>

    </div>
  )
}

export default CDash
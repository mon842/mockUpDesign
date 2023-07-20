import React from 'react'
import Tags from './Tags'

const InDashbord = () => {
  return (
    <div className='p-4'>
        <p className='my-2 font-bold text-indigo-600 '>Retirement Income</p>
        <p className='my-2 font-bold'>Starting Year 2026</p>
        <div className='grid grid-cols-2 lg:grid-cols-4 '>
            <div className='col-span-2'>
                <Tags amt={'$300,000'} txt={'My Goal'}/>
            </div>
            <div className='col-span-1'>
                <Tags amt={'59%'} txt={'Goal Achieved'}/>
            </div>
            <div className='col-span-1'>
                <Tags amt={'$300'} txt={'Est. Monthly Income'}/>
            </div>
        </div>
    </div>
  )
}

export default InDashbord